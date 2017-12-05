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
// http request 拦截器
axios.interceptors.request.use(
  request => {
    return request
  },
  err => {
    if (err === 'session.timeout') {
      console.log('网络不稳定，请检查您的网络，确保网络畅通。1')
    } else {
      console.log(err)
    }
    return Promise.reject(err)
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
    }).then(response => {
      resolve(response)
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
      cancelToken: new axios.CancelToken(function executor (c) {
        postCancel = c
      })
    }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    }).catch(thrown => {
      reject(err)
    })
  })
}

export default {get, post}
