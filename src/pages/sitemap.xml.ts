import type { APIRoute } from 'astro';

import { guideRoutes } from '../lib/guides';

export const GET: APIRoute = async ({ site }) => {
  const guides = (await guideRoutes()).map(route => '/' + route.params.path + '/');
  const urls = ['/', '/zh-cn/', ...guides].map(path => `<url><loc>${new URL(path, site).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
