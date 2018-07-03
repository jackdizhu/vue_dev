// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import { request, requestAll } from './com/http.js'
import Api from './com/api.js'

import '@/less/com.less'
// import config from './com/config.js'

// 引入全部组件
import Mint from 'mint-ui'
// 引入全局样式
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 使用 路由
Vue.use(Router)

// Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$requestAll = requestAll
Vue.prototype.$api = Api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
