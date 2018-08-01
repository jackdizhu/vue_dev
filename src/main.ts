import Vue from 'vue'
import App from './App.vue'

import Api from './com/api.json'
import {httpRequest} from './com/http'

Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.prototype.$httpRequest = new httpRequest()

new Vue({
  render: h => h(App)
}).$mount('#app')
