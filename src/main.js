import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import plugins from './plugins'
import filters from './filters'

Vue.config.productionTip = false

Vue.use(plugins)
Vue.filter('inCurrency', filters.inCurrency)

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#app')
