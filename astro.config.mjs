import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  site: 'https://tarun-rg.in',

  integrations: [
    starlight({ 
      title: 'Tarun R G', 
      disable404Route: true,
    }),
    mdx(),
    sitemap(),
  ],

  adapter: vercel(),
});