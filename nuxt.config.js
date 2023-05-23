const pkg = require('./package')

module.exports = {
  mode: 'spa',
  server: {
    host: '127.0.0.1',
    port: 8888
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},

  /*
   ** Global CSS
   */

  css: [
    'element-ui/lib/theme-chalk/index.css'
    // '@/assets/css/common.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui','@/plugins/echarts'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: [
    [
      '/tomcat',
      {
        target: 'http://47.106.248.53:8080',
        pathRewrite: {'^/tomcat': '/GeoKG'}
      }
    ]
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
