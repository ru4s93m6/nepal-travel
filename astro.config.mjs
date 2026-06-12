// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: 'always',
  site: 'https://oriental-express-travel.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-tw',
        locales: {
          'zh-tw': 'zh-TW',
          'en': 'en-US',
        },
      },
      filter: (page) => {
        return page !== 'https://oriental-express-travel.com/';
      },
    }),
  ],
});