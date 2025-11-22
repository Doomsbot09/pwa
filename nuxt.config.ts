// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "vercel",
    prerender: {
      routes: ['/'],
    },
  },

  modules: ['@vite-pwa/nuxt', 'nuxt-quasar-ui', '@nuxt/image'],

  pwa: {
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'my-progress-web-app',
      short_name: 'my-progress-web-app',
      description: 'Progressive Web App Template',
      theme_color: '#1976d2',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },

    experimental: {
      enableWorkboxPayloadQueryParams: true,
    },

    registerWebManifestInRouteRules: true,

    client: {
      installPrompt: true,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
})