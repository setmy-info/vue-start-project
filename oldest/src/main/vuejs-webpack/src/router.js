import Vue from 'vue'
import Router from 'vue-router'
import root from '@views/root'
import example1 from '@views/example1'
import example2 from '@views/example2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: root
    },
    {
      path: '/example1',
      component: example1
    },
    {
      path: '/example2',
      component: example2
    }
  ]
})
