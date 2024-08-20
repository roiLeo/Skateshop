export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/ui', 'nuxt-auth-utils'],
  ui: { global: true },

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  runtimeConfig: {
    public: {
      githubAuth: Boolean(process.env.GH_AUTH || (process.env.NUXT_OAUTH_GITHUB_CLIENT_ID && process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET)),
      googleAuth: Boolean(process.env.GOOGLE_AUTH || (process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID && process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET))
    }
  },

  compatibilityDate: '2024-08-20'
})