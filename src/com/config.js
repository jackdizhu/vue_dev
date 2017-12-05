let apiEnv, apiRoot

let useLocalMock = false

// 开发环境
let devUrl = '/api'
// 生产环境
let prodUrl = '/api'
// 测试环境
let testUrl = '/api'
// 模拟环境
let mockUrl = '/mock/service2/'

apiEnv = {
  'dev': {
    webURL: devUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'prod': {
    webURL: prodUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'test': {
    webURL: testUrl,
    imgURI: 'http://218.17.30.29:8081/'
  },
  'mock': {
    webURL: mockUrl,
    imgURI: 'http://218.17.30.29:8081/'
  }
}

switch (window.location.host) {
  case 'localhost:8088':
    if (useLocalMock) {
      apiRoot = apiEnv.mock
    } else {
      apiRoot = apiEnv.dev
    }
    break
  case '192.168.199.244:8088':
    if (useLocalMock) {
      apiRoot = apiEnv.mock
    } else {
      apiRoot = apiEnv.dev
    }
    break
  default:
    apiRoot = {
      webURL: window.location.protocol + '//' + window.location.host,
      imgURI: window.location.protocol + '//' + window.location.host + '/'
    }
}

export {apiRoot, useLocalMock}
