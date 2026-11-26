// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Static output only: the site never talks to the app at runtime (brief 06-blueprint §2).
export default defineConfig({
  site: 'https://saldodesk.mk',
  trailingSlash: 'always',
  i18n: {
    locales: ['mk', 'en'],
    defaultLocale: 'mk',
    // Every language lives under its own prefix (/mk/, /sq/, /en/); the root page
    // picks one once (src/pages/index.astro), so Astro must not redirect it itself.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
})
