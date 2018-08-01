import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

// import Page from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      // children: [
      //   {
      //     path: '/page/VPost',
      //     name: 'VPost',
      //     component: VPost
      //   }
      // ]
    }
  ]
})
