import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { url } from '../data/layers';

// One <url> per page and language, each pointing at its twin with hreflang.
export const GET: APIRoute = async ({ site }) => {
  const slugs = (await getCollection('projects')).map((p) => `work/${p.id}/`);
  const abs = (p: string, l: 'en' | 'ar') => new URL(url(p, l), site).href;
  const entries = ['', 'work/', ...slugs].flatMap((p) =>
    (['en', 'ar'] as const).map((l) => `<url><loc>${abs(p, l)}</loc><xhtml:link rel="alternate" hreflang="en" href="${abs(p, 'en')}"/><xhtml:link rel="alternate" hreflang="ar" href="${abs(p, 'ar')}"/></url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
