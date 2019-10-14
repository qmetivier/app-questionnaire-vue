import Vue from 'vue'
import QM_Login from './components/QM_Login.vue'
import QM_Questionnaire from './components/Questionnaire.vue'

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
    methods : {
        login_success : function() {
            this.login = true;

        }
    },

    render (h) { return h(this.ViewComponent) }
}).$mount('#app')
