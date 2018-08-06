import Vue from 'vue'
import Vuex from 'vuex'
import {storage} from '@/com/com'

let _storage: any = new storage()

Vue.use(Vuex)

interface State {
  user?: {
    _id: string,
    date: number
  }
}

const state: State = {
  user: (function () {
    let obj = null
    try {
      obj = JSON.parse(_storage.getItem('user'))
    }
    catch(err){
      obj = {}
    }
    return obj
  })()
}
// 同步操作
const mutations = {
  // 方法名 建议大写
  USER_SIGNIN(state: any, user: any) {
    _storage.setItem('user', JSON.stringify(user))
    Object.assign(state.user, user)
  },
  USER_SIGNOUT(state: any) {
    _storage.removeItem('user')
    Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}
// 异步操作
const actions = {
  // {commit} 解构赋值 直接获取属性方法
  user_signin(con: {
    commit: any,
    state: any
  }, user: any) {
    con.commit('USER_SIGNIN', user)
  },
  // {commit} 解构赋值 直接获取属性方法
  user_signout(con: {
    commit: any,
    state: any
  }) {
    con.commit('USER_SIGNOUT')
  }
}
// 获取状态信息
const getters = {
  show_user_id: (state: any) => (state.user&&state.user._id)||'',
}

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  state,
  mutations,
  actions,
  getters
})
