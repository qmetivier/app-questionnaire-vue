import Vue from 'vue'
import Router from 'vue-router'

import QM_Login from './components/QM_Login.vue'
import QM_Questionnaire from './components/Questionnaire.vue'
import QM_Score from "@/components/QM_Score";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: QM_Login
        },
        {
            path: '/questionnaire',
            name: 'questionnaire',
            component: QM_Questionnaire
        },
        {
            path: '/result',
            name: 'result',
            component: QM_Score,
        }

    ]
})