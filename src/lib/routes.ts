import { locales, sections, sitePath } from './site';
import { videos } from './videos';
import { guideRoutes } from './guides';

export async function contentRoutes() {
  const guides = (await guideRoutes()).map(({ params, props }) => ({
    params, props: { type: 'guide' as const, guide: props },
  }));
  const destinations = locales.flatMap(locale => {
    const path = (slug: string) => ({ path: sitePath(locale, slug).slice(1) });
    const pages = sections.filter(section => section !== 'docs').map(section => ({
      params: path(section), props: { type: section, locale },
    }));
    const films = videos(locale).map(clip => ({
      params: path('videos/'+clip.slug), props: { type: 'film' as const, locale, clip },
    }));
    return [...pages, ...films];
  });
  return [...guides, ...destinations];
}
