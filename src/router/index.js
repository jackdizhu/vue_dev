import Vue from 'vue'
import Router from 'vue-router'

import Page from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: Page,
      children: [
        // {
        //   path: '/page/VModelTest',
        //   name: 'VModelTest',
        //   component: VModelTest
        // }
      ]
    }
  ]
})
