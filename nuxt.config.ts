// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  css: [
      './assets/css/tailwind.css'
  ],
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    preference: 'light'
  },
  appConfig: {
  },
  compatibilityDate: '2024-04-03',
})