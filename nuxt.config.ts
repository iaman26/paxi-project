// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vee-validate/nuxt',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Paxi',
      meta: [
        {
          charset: 'utf-8',
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'apple-mobile-web-app-title', content: 'Paxi' },
        {
          hid: 'description',
          content: 'Paxi',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Montserrat:wght@300;400;500;600;700&display=swap',
        },
        { rel: 'preconnect', href: `https://fonts.googleapis.com` },
        { rel: 'preconnect', href: `https://fonts.gstatic.com` },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '57x57',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '60x60',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '76x76',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '114x114',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '120x120',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '152x152',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '256x256',
          href: '/assets/images/favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '512x512',
          href: '/assets/images/favicon.png',
        },
      ],
    },
  },
  vite: {
    define: {
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    },
  },
  imports: {
    autoImport: true,
  },
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: 'Ui',
        // prevent adding another prefix component by it's path.
        pathPrefix: false,
      })
    },
  },
})
