import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/:username?',
      name: 'home',
      component: home,
      props: true
    }
  ]
})

export default router
