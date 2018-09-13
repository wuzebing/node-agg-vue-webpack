import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Example from '@/views/Example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    }
  ]
})
