# app1

> app1 project

# preRender

* vue 预渲染
* 渲染部分页面 其他页面正常使用 vue Router

``` sh
# 预渲染插件
npm install --save prerender-spa-plugin
# 保持vue-router和vuex存储同步
npm install --save vuex-router-sync
# 拷贝文件
npm install --save copy-webpack-plugin
# 在PhantomJS中运行Vue
npm install --save babel-polyfill
```
``` js
// Router 定义
export default new Router({
  // mode 定义
  mode: 'history',
  routes: []
})
// webpack.prod.conf.js 定义
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  }
])
new PrerenderSpaPlugin(
  path.join(path.resolve(__dirname, '../dist')),
  [ '/', '/HelloWorld']
)
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
