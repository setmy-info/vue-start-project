import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@views/HelloWorld';
import shoppingExample from '@views/shoppingExample';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/shopping',
            name: 'shoppingExample',
            component: shoppingExample
        }
    ]
});
