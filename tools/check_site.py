"""Check the links that connect the generated pages, translations and media."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree

DIST = Path(__file__).resolve().parents[1] / "dist"
SITE = "https://arcnix.org"


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.links = []
        self.ids = set()
        self.languages = {}
        self.canonical = None
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "link" and attrs.get("rel") == "alternate":
            self.languages[attrs["hreflang"]] = attrs["href"]
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs["href"]
        self.links.extend(attrs[key] for key in ("src", "href", "poster") if attrs.get(key))


def main():
    pages = {"/" + p.relative_to(DIST).as_posix().removesuffix("index.html"): Page(p)
             for p in DIST.rglob("index.html")}
    sitemap = ElementTree.parse(DIST / "sitemap.xml")
    urls = {node.text for node in sitemap.findall(".//{*}loc")}
    assert urls == {SITE + path for path in pages}, "Sitemap and generated routes differ"
    for prefix in ("/", "/zh-cn/"):
        for route in ("", "workspace/", "operations/", "videos/", "downloads/",
                      "docs/", "docs/quick-start/", "docs/install/"):
            assert prefix + route in pages, prefix + route
    for path, page in pages.items():
        english = path.removeprefix("/zh-cn") if path.startswith("/zh-cn/") else path
        assert page.canonical == SITE + path, path
        assert page.languages["en"] == SITE + english, path
        assert page.languages["zh-CN"] == SITE + "/zh-cn" + english, path
        for link in page.links:
            target = urlsplit(urljoin(SITE + path, link))
            if target.netloc != "arcnix.org":
                continue
            dest = unquote(target.path)
            if dest in pages:
                if target.fragment:
                    assert unquote(target.fragment) in pages[dest].ids, (path, link)
            else:
                assert (DIST / dest.lstrip("/")).is_file(), (path, link)
    print(f"Verified sitemap, translations and internal links on {len(pages)} pages")


if __name__ == "__main__":
    main()
