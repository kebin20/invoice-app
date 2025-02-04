// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'], 
  modules: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";` 
        }
      }
    }
  }
})
function defineNuxtConfig(config: {
    css: string[];
    modules: any[];
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: string;
                };
            };
        };
    };
}) {
    return config;
}
