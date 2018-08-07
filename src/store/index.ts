import Vue from 'vue'
import Vuex from 'vuex'
import {storage} from '@/com/com'
import createPersistedState from 'vuex-persistedstate'

let _storage = new storage()

Vue.use(Vuex)

interface State {
  user: {
    _id?: string,
    date?: number
  }
}

const state: State = {
  user: {}
}
// 同步操作
const mutations = {
  // 方法名 建议大写
  USER_SIGNIN(state: State, user: any) {
    Object.assign(state.user, user)
  },
  USER_SIGNOUT(state: State) {
    Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}
// 异步操作
const actions = {
  // {commit} 解构赋值 直接获取属性方法
  user_signin(con: {
    commit: any,
    state: State
  }, user: any) {
    con.commit('USER_SIGNIN', user)
  },
  // {commit} 解构赋值 直接获取属性方法
  user_signout(con: {
    commit: any,
    state: State
  }) {
    con.commit('USER_SIGNOUT')
  }
}
// 获取状态信息
const getters = {
  show_user_id: (state: State) :string => (state.user&&state.user._id)||'',
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
  plugins: [createPersistedState()],
  state,
  mutations,
  actions,
  getters
})
