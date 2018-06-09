import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Vitable from '@/components/Vitable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/vitable',
      name: 'Vitable',
      component: Vitable,
    }
  ]
})
