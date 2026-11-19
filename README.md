# Arcnix website

The bilingual Astro site for [arcnix.org](https://arcnix.org). Arcnix desktop development and downloads live in [arcnix-org/arcnix](https://github.com/arcnix-org/arcnix).

## Development

Use Node.js 24 LTS and npm. Run `npm ci` and `npm run dev`. Run `npm run build` for a production build and `npm run preview` to serve it locally.

Edit the user guides in [docs/guide/en](docs/guide/en) and [docs/guide/zh-cn](docs/guide/zh-cn). Give matching translations the same filename and set the title, description and navigation order in frontmatter. Use `npm run dev` to preview edits at `/docs/` and `/zh-cn/docs/`. Merging a guide change into this repository’s `main` automatically builds and publishes the site.

English is served at `/` and Simplified Chinese at `/zh-cn/`. Both use the same Astro page component. Product screenshots in `public/media` come from the Arcnix desktop test fixtures.

## Deployment

GitHub Actions builds and checks both locales for pull requests. Pushes to `main` also deploy the checked `dist/` to the Cloudflare Pages project `arcnix` using the Wrangler version in the lockfile. You can rerun a production deployment from the Actions tab on `main`.

Set the Actions repository variable `CLOUDFLARE_ACCOUNT_ID` and the Actions repository secret `CLOUDFLARE_API_TOKEN`. The token needs **Account → Cloudflare Pages → Edit** for the account hosting the project. The project serves [arcnix.pages.dev](https://arcnix.pages.dev) and its custom domain is managed under **Workers & Pages → arcnix → Custom domains**.

Source and Arcnix assets are licensed under Apache-2.0. Inter is distributed under the SIL Open Font License (see `public/fonts/Inter-LICENSE.txt`).
