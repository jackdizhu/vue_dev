import axios from 'axios'
import https from 'https'
axios.defaults.timeout = 1000 * 60 * 60
// axios.defaults.baseURL = config.apiRoot.webURL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
})
var qs = require('qs')
// http request 请求 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 响应 拦截器
axios.interceptors.response.use(
  res => {
    let _data = res.data
    if (_data) {
      return Promise.resolve(_data)
    }
    console.log(res, '响应异常 ----------- http response 响应 拦截器')
    return Promise.resolve({})
  },
  err => {
    console.log(err, '请求异常 ----------- http response 响应 拦截器')
    return Promise.resolve({})
  })

/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data), {
      // cancelToken: new axios.CancelToken(function executor (c) {
      //   postCancel = c
      // })
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {get, post}
