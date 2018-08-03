// import Vue from 'vue'
// import App from './App'
// import Router from 'vue-router'
// import router from './router'
// import { request, requestAll } from './com/http.js'
// import Api from './com/api.js'

// import '@/less/com.less'

// Vue.use(Router)

// Vue.prototype.$request = request
// Vue.prototype.$requestAll = requestAll
// Vue.prototype.$api = Api

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue'
import App from './App.vue'

import '@/less/com.less'

new Vue({
  render: (h: any) => h(App)
}).$mount('#app')
