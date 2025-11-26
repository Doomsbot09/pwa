export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  sourcemap: false,

  nitro: {
    preset: "vercel",
  },

  modules: [
    '@vite-pwa/nuxt', 
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    'pinia-plugin-persistedstate/nuxt'
  ],

  pwa: {
    registerType: 'autoUpdate',
    injectRegister: false,

    // ❗ Disable heavy asset generation in Vercel
    pwaAssets: {
      disabled: process.env.NODE_ENV === 'production',
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
      enabled: process.env.NODE_ENV === 'development',
      suppressWarnings: true,
      type: 'module'
    },

    experimental: {
      enableWorkboxPayloadQueryParams: false, // disable slow feature
    },

    registerWebManifestInRouteRules: true,
  },

  css: ['@/assets/css/main.css'],

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
})
