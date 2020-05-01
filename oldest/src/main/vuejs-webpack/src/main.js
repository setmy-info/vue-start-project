// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import 'babel-polyfill'
import vueServiceJS from 'vue-servicejs'
import jsdi from 'jsdi'
import VeeValidate from 'vee-validate'
import placeHolders from '@filters/placeHolders'
import inCurrency from '@filters/inCurrency'
import '@directives/afocus'

jsdi.get().$log.setLevel(jsdi.get().$log.DEBUG)

Vue.use(vueServiceJS)
Vue.use(VeeValidate)

Vue.filter('placeHolders', placeHolders)
Vue.filter('inCurrency', inCurrency)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
