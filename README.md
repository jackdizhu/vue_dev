# dev_ts

## Vue.js + TypeScript

* vueClass.ts 自定义 vue 类 增加属性方法
* demo/ TypeScript 相关语法
* 通过 vue-cli@3 建立 Vue + TypeScript 项目
* @Prop() private msg!: string 编辑器报警告错误: Member 'string' implicitly has an 'any' type

``` sh
npm i --g @vue/cli
vue create vue_dev
vue add @vue/typescript
```

* 处理 Property '$api' does not exist on type 'App' 等类型错误

``` js
declare module 'vue/types/vue' {
  interface Vue {
    $api: any,
    $httpRequest: any
  }
}
```
