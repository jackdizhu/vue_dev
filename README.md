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

// vuex-class 使用
@State user: any
@Action user_signin: any
@Mutation USER_SIGNIN: any
@Getter show_user_id: any

this.user
// Mutation
this.USER_SIGNIN(data)
// Action
this.user_signin(data)
this.show_user_id

// 私有方法
private  methods_vueclass_private() {
  console.log(1, 'VueClass methods_vueclass_private')
}
// 保护方法（可继承的方法）
protected methods_vueclass_protected() {
  console.log(1, 'VueClass methods_vueclass_protected')
}

// target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// propertyKey: 成员的名字
// descriptor: 成员的属性描述符 {value: any, writable: boolean, enumerable: boolean, configurable: boolean}

// 方法装饰器
const Mounted = function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let key = propertyKey
  let fun = descriptor.value
  target['Mounted'] = target['Mounted'] || {}
  target['Mounted'][key] = fun
  console.log(1, target)
}
@Phone
public phone: string = '130'

// 属性装饰器
const Phone = function (target: any, propertyKey: string) {
  let key = propertyKey
  target['val'] = target['val'] || {}
  target['val'][key] = '100'
  console.log(1, target)
}
@Mounted
public mounted () {
  console.log(1, this.$el)
}
```

```
npm i vue-class-component@6.2.0 vue-property-decorator@7.0.0 ts-loader@3.5.0 typescript@3.0.1 --save
npm install --save tslib
```
