import { defineConfig } from 'astro/config';

// SITE/BASE come from the Pages workflow; locally the site is served from "/".
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE || '/',
});
