// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://tales-portfolio.lndo.site/graphql'
    }
  }
})