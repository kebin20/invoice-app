import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/src/styles/scss/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`
        }
      }
    }
  },

  compatibilityDate: '2025-02-04'
})