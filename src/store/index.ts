import Vue from 'vue'
import Vuex from 'vuex'
import {storage} from '@/com/com'

let _storage: any = new storage()

Vue.use(Vuex)

const state = {
  user: JSON.parse(_storage.getItem('user')) || {},
}
// 同步操作
const mutations = {
  // 方法名 建议大写
  USER_SIGNIN(state: any, user: any) {
    _storage.setItem('user', JSON.stringify(user)) //关闭浏览器 失效
    // es6 新增方法 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象
    Object.assign(state.user, user)
  },
  USER_SIGNOUT(state: any) {
    _storage.removeItem('user')
    // console.log(state.name,'state');
    // console.dir(user,'user');
    Object.keys(state).forEach(k => Vue.delete(state, k))
    // console.dir(state.user,'state');
  }
};
// 异步操作
const actions = {
  // {commit} 解构赋值 直接获取属性方法
  user_signin({
    commit
  }, user: any) {
    commit('USER_SIGNIN', user)
  },
  // {commit} 解构赋值 直接获取属性方法
  user_signout({
    commit
  }) {
    commit('USER_SIGNOUT')
  }

};
// 获取状态信息
const getters = {
  show_user_id: (state: any) => state.user._id,
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  state,
  mutations,
  actions,
  getters
})
