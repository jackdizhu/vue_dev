import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import '@/less/com.less'

Vue.config.productionTip = false

// // 同一路由切换时，上一次的页面数据会保留
// const somePlugin = {
//   install: function () {
//     Vue.mixin({
//       created () {
//         let data = this.$data
//         console.log(data, 'Vue.mixin created')
//       }
//     })
//   }
// }
// // 使用插件
// Vue.use(somePlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
