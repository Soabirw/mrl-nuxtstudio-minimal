// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  tailwindcss: {
    configPath: './tailwind.config.ts', // Make sure this matches your actual file name
    cssPath: '~/assets/css/tailwind.css'
  },
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    preference: 'light'
  },
  compatibilityDate: '2024-04-03',
})