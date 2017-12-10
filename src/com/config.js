let config, host

let useLocalMock = false

// 开发环境
let devUrl = '/api'
// 生产环境
let prodUrl = '/api'
// 测试环境
let testUrl = '/api'
// 模拟环境
let mockUrl = 'http://127.0.0.1:7300/mock/5a2bc96a0992fd3af87447f1/test1'

config = {
  'dev': {
    apiHost: devUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'prod': {
    apiHost: prodUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'test': {
    apiHost: testUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'mock': {
    apiHost: mockUrl,
    imgURI: 'http://218.17.30.29:8081/'
  }
}

host = config.mock

export default {host}
