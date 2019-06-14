import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import Page from '@/page/index'
import VModelTest from '@/page/v_test/VModelTest.vue'
import VAwesomeSwiper from '@/page/v_test/VAwesomeSwiper.vue'
import VAwesomeSwiper2 from '@/page/v_test/VAwesomeSwiper.1.vue'
import VPost from '@/page/v_test/VPost.vue'
import iframeChild from '@/components/iframeChild'
import iframeVue from '@/components/iframeVue'
import upload from '@/components/webUpload'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      component: Page,
      children: [
        {
          path: '/page/VModelTest',
          name: 'VModelTest',
          component: VModelTest
        },
        {
          path: '/page/VAwesomeSwiper',
          name: 'VAwesomeSwiper',
          component: VAwesomeSwiper
        },
        {
          path: '/page/VAwesomeSwiper2',
          name: 'VAwesomeSwiper2',
          component: VAwesomeSwiper2
        },
        {
          path: '/page/VPost',
          name: 'VPost',
          component: VPost
        },
        {
          path: '/page/iframeVue',
          name: 'iframeVue',
          component: iframeVue
        },
        {
          path: '/page/iframeChild',
          name: 'iframeChild',
          component: iframeChild
        },
        {
          path: '/page/upload',
          name: 'upload',
          component: upload
        }
      ]
    }
  ]
})
