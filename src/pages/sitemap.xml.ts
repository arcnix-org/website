import type { APIRoute } from 'astro';
import { contentRoutes } from '../lib/routes';
import { locales, sitePath } from '../lib/site';

export const GET: APIRoute = async ({ site }) => {
  const paths = [...locales.map(locale => sitePath(locale)), ...(await contentRoutes()).map(route => '/'+route.params.path+'/')];
  const urls = paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
