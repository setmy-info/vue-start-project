import servedjsGeo from 'servedjs-geo'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import plugins from './plugins'
import filters from './filters'
import { feature } from './directives'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

Vue.use(plugins)
Vue.filter('inCurrency', filters.inCurrency)
Vue.directive('feature', feature)

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#application')
