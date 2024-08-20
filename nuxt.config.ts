export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  ui: { global: true },
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      providers: {
        google: {
          name: 'Google',
          icon: '',
          color: 'gray'
        }
      }
    }
  }
})
