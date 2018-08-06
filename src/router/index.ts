import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index.vue'

// import Page from '@/page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
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
