// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=no',
      title: 'Strongly Typed by HTML5 UP',
      meta: [
        { name: 'description', content: 'Strongly Typed theme by HTML5Up' }
      ],
      link: [
        { rel: 'stylesheet', href: 'css/main.css' }
      ],
      script: [
        { type: 'text/javascript', src: 'js/jquery.min.js', body: true },
        { type: 'text/javascript', src: 'js/browser.min.js', body: true },
        { type: 'text/javascript', src: 'js/breakpoints.min.js', body: true },
        { type: 'text/javascript', src: 'js/util.js', body: true },
        { type: 'text/javascript', src: 'js/main.js', body: true }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      content: [],
      theme: {
        screens: {
          'xs': '480px',
          'sm': '736px',
          'md': '980px',
          'lg': '1280px',
          'xl': '1680px'
        }
      }
    }
  }
})
