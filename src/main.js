import servedjsGeo from 'servedjs-geo'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import plugins from './plugins'
import filters from './filters'
import { feature } from './directives'
import version from './config/version'

Vue.config.productionTip = false

$log.setLevel($log.INFO)
$log.info('App strted', version)

Vue.use(plugins)
Vue.filter('inCurrency', filters.inCurrency)
Vue.directive('feature', feature)

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#application')
