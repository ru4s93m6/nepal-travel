// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
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