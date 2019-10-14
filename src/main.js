import Vue from 'vue'
import QM_Login from './pages/QM_Login.vue'
import QM_Questionnaire from './pages/Questionnaire.vue'

Vue.config.productionTip = false

const NotFound = { template: '<p>Page not found</p>' }

const routes = {
    '/': QM_Login,
    '/questionnaire' : QM_Questionnaire,
};

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound;
        }
    },
    render (h) { return h(this.ViewComponent) }
}).$mount('#app')
