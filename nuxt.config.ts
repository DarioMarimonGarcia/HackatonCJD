// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  devtools: { enabled: true },
  typescript: { shim: false }, // Chao typescript,
  pages: true,
  plugins: [
      '~/plugins/vue-observe-visibility.js'
  ],
})
