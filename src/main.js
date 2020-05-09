/* jshint ignore:start */
import servedjsGeo from 'servedjs-geo'
/* jshint ignore:end */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import plugins from './plugins'
import filters from './filters'
import { feature } from './directives'
import version from './config/version'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

/* jshint ignore:start */
const $log = jsdi.services.$log
$log.setLevel($log.INFO)
$log.info('App strted', version)
/* jshint ignore:end */

Vue.use(plugins)
Vue.filter('inCurrency', filters.inCurrency)
Vue.directive('feature', feature)

new Vue({
  router,
  stores,
  render: h => h(App)
}).$mount('#application')
