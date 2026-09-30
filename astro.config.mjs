import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt(),
    // /components is an internal design-system page, keep it out of the sitemap
    sitemap({ filter: (page) => !page.includes("/components") }),
  ],
  site: 'https://porfolio.dev/',
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest']
    }
  }
})
