            var root, foo, bar, foo2, bar2, routes, router, app;
            root = {template: '<div>root</div>'};
            foo = {template: '<div>foo</div>'};
            bar = {template: '<div>bar</div>'};
            foo2 = Vue.component('foo2', {
                template: '#foo2'
            });
            bar2 = Vue.component('bar2', {
                template: '#bar2'
            });
            routes = [
                {path: '/', component: root},
                {path: '/foo', component: foo},
                {path: '/bar', component: bar},
                {path: '/foo2', component: foo2},
                {path: '/bar2', component: bar2},
                {path: '*', redirect: '/'}
            ];
            router = new VueRouter({
                routes: routes
            });
            app = new Vue({router: router}).$mount('#app');
