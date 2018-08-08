## vue lang="ts" 打包配置完成

* ts-loader @3需要webpack@3版本 ,@4需要webpack@4版本
* vuex-persistedstate vuex 持久化存储
* Vue.mixin created 调用 this.$data 属性报错(使用class 继承代替)
```
// 类型“VueConstructor<Vue>”上不存在属性“$data”
// 同一路由切换时，上一次的页面数据会保留
const somePlugin = {
  install: function () {
    Vue.mixin({
      created () {
        let data = this.$data
        console.log(data, 'Vue.mixin created')
      }
    })
  }
}
// 使用插件
Vue.use(somePlugin)
```

```
npm i vue-class-component@6.2.0 vue-property-decorator@7.0.0 ts-loader@3.5.0 typescript@3.0.1 --save
npm install --save tslib
```
