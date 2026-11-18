# Arcnix website

The bilingual Astro site for [arcnix.org](https://arcnix.org). Arcnix desktop development and downloads live in [arcnix-org/arcnix](https://github.com/arcnix-org/arcnix).

## Development

Use Node.js 24 LTS and npm. Run `npm ci` and `npm run dev`. Run `npm run build` for a production build and `npm run preview` to serve it locally.

English is served at `/` and Simplified Chinese at `/zh-cn/`. Both use the same Astro page component. Product screenshots in `public/media` come from the Arcnix desktop test fixtures.

## Deployment

Pushes to `main` build the static site and deploy `dist/` to GitHub Pages. Set the repository's Pages source to GitHub Actions and custom domain to `arcnix.org`. The apex DNS records must point to GitHub Pages before HTTPS can be enabled.

Source and Arcnix assets are licensed under Apache-2.0. Inter is distributed under the SIL Open Font License (see `public/fonts/Inter-LICENSE.txt`).
