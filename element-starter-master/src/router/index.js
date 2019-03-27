import Vue from 'vue'
import Router from 'vue-router'

import App from '~/App.vue'
import home from '~/components/home.vue'
import company from '~/components/company.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/company',
    component: company,
  }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})