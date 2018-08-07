import axios from 'axios'
// import https from 'https'
axios.defaults.timeout = 1000 * 60 * 60
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ab8bf9cca39d01d844c0bf7/test'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.withCredentials = true // 带cookie 请求
// axios.defaults.httpsAgent = new https.Agent({
//   rejectUnauthorized: false
// })

// 定义 request 方法参数结构
interface RequestParams {
  url: string,
  type: 'GET'|'POST',
  params: any,
  baseURL?: string
}

var qs = require('qs')

export class httpRequest {
  /**
   * get 请求方法
   * @param url
   * @param params
   * @returns {Promise}
   */
  get (url: string, params: any = {}): Promise<any> {
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
  post (url: string, data: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (res: any) {
        resolve(res)
      }, err => {
        reject(err)
      }).catch(err => {
        reject(err)
      })
    })
  }

  /**
   * request 请求方法
   * @param obj {  url, params, type }
   * @returns {Promise}
   */
  request (obj: RequestParams): Promise<any> {
    let { url, params, type, baseURL } = obj
    baseURL !== undefined && (axios.defaults.baseURL = baseURL)
    return new Promise((resolve, reject) => {
      let fn = null
      if (type === 'POST') {
        fn = this.post
      } else {
        fn = this.get
      }
      fn(url, params).then(function (res: any) {
        let data = res.data || {}
        resolve(data)
      }).catch((err: any) => {
        let status = (err.response && err.response.status) || 0
        console.log(status, 'request catch err')
        resolve({ code: status, err: 'requestErr' })
        // reject(err) // 返回错误
      })
    })
  }

  /*
    this.$requestAll([
      this.$request({
        url: this.$api.mock,
        type: 'GET',
        params: {}
      }),
      this.$request({
        url: this.$api.mock,
        type: 'POST',
        params: {}
      })
    ]).then((arg) => {
      console.log(arg, '--requestAll--')
    })
   */
  requestAll (_requestArr: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.all(_requestArr)
      .then(axios.spread(function (...params) {
        resolve(params)
      })).catch((err: any) => {
        console.log(err, 'requestAll catch err')
        resolve({ err: 'requestErr' })
        // reject(err) // 返回错误
      })
    })
  }
}

// export { request, requestAll }
