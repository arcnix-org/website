# Arcnix website

The bilingual Astro site for [arcnix.org](https://arcnix.org). Arcnix desktop development and downloads live in [arcnix-org/arcnix](https://github.com/arcnix-org/arcnix).

## Development

Use Node.js 24 LTS and npm. Run `npm ci` and `npm run dev`. Run `npm run build` for a production build and `npm run preview` to serve it locally.

Clone [arcnix-org/arcnix](https://github.com/arcnix-org/arcnix) beside this website checkout before running the dev server or build. Astro reads the Markdown in `../arcnix/docs/guide` directly. Set `ARCNIX_GUIDE_DIR` to the guide directory if your checkout is elsewhere.

User documentation lives in the application repository under `docs/guide/en` and `docs/guide/zh-cn`. Give matching translations the same filename and set the title, description and navigation order in frontmatter. When a change to `docs/guide/**` lands on the application's `main`, its **Publish user guides** workflow dispatches this repository's production build. Each build checks out the current guides and publishes both languages together.

English is served at `/` and Simplified Chinese at `/zh-cn/`. Both use the same Astro page component. Product screenshots in `public/media` come from the Arcnix desktop test fixtures.

## Deployment

GitHub Actions builds and checks both locales for pull requests. Pushes to `main` also deploy the checked `dist/` to the Cloudflare Pages project `arcnix` using the Wrangler version in the lockfile. You can rerun a production deployment from the Actions tab on `main`.

Set the Actions repository variable `CLOUDFLARE_ACCOUNT_ID` and the Actions repository secret `CLOUDFLARE_API_TOKEN`. The token needs **Account → Cloudflare Pages → Edit** for the account hosting the project. The project serves [arcnix.pages.dev](https://arcnix.pages.dev) and its custom domain is managed under **Workers & Pages → arcnix → Custom domains**.

For guide updates, set the application repository's Actions secret `WEBSITE_ACTIONS_TOKEN` to a fine-grained token scoped to `arcnix-org/website` with **Actions: read and write**. Renew it before expiry.

Source and Arcnix assets are licensed under Apache-2.0. Inter is distributed under the SIL Open Font License (see `public/fonts/Inter-LICENSE.txt`).
