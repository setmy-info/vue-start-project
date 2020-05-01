// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

//VueJS plugin for injection some default services and models.
Vue.use({
    install: function (Vue, options) {
        Vue.mixin({
            created: function () {
                this.vueDataService = jsdi.get().vueDataService;
                this.translations = jsdi.get().languageService.translations;
                var componentName = this.$options.name,
                        componentServiceName = componentName + 'Service',
                        dependencies = this.$options.dependencies,
                        position, depName;
                this[componentServiceName] = jsdi.get(componentServiceName);
                if (dependencies) {
                    console.log("Component: ", componentName, dependencies);
                    for (position = 0; position < dependencies.length; position++) {
                        depName = dependencies[position];
                        this[depName] = jsdi.get(depName);
                    }
                }
            }
        });
    }
});

//VueJS filter for place holder translations
Vue.filter('placeHolders', function () {
    if (arguments) {
        var resultString = arguments[0], i;
        for (i = 1; i < arguments.length; i++) {
            resultString = resultString.replace("{" + (i - 1) + "}", arguments[i]);
        }
    }
    return resultString;
});

Vue.filter('inCurrency', function (value, currency) {
    var result = (value / 100) + " " + currency;
    return result;
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});
