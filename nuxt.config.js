// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'], // Load your global Sass file
  modules: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";` // Automatically import variables in every file
        }
      }
    }
  }
})
