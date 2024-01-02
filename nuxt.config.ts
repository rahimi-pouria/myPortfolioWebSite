// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/myPortFolioWebSite/'
  },
  build: {
    publicPath: './_nuxt/',
  },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/base.scss',
        '~/assets/css/fonts.scss',
        '~/assets/css/Global.scss',
        '~/assets/css/size.scss',
        '~/assets/sass/color.sass'
      ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ]
}) 
