<template>
  <div class="hello">
    <p>_id: {{user._id}}</p>
  </div>
</template>

<script lang="ts">
import VueClass from '@/vueClass'
import { Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { State, Action, Mutation, Getter } from 'vuex-class'

interface GetRes {
  code: string,
  data: {
    _id: string,
    date: number
  }
}

@Component
export default class HelloWorld extends VueClass {
  // vuex
  @State user: any
  @Action user_signin: any
  @Mutation USER_SIGNIN: any
  @Getter show_user_id: any
  // 定义 data 数据
  dataMsg:string = 'dataMsg'
  dataNum:number = 11
  // 定义 watch 方法
  @Watch('dataNum')
  Watch_dataNum(val: number, oldVal: number): void {
    // console.log(val, 123456)
  }
  // 定义 computed 方法
  get _activeRouteItemRoute(): string {
    // return this.$route.path
    return 'this.$route.path'
  }
  // 定义 methods 方法
  @Emit()
  methods_dataMsg_add (n: string): void {
    // 编译警告错误: Property 'className' does not exist on type
    // this.$refs.dataMsg.className = 'on'
    this.dataMsg += n + this.api.version
  }
  @Emit()
  methods_dataNum_add (n: number): void {
    this.dataNum += n
  }
  @Emit()
  methods_changeId (): void {
    let data = {
      code: 'string',
      data: {
        _id: this.show_user_id + 'string',
        date: 123
      }
    }
    this.user_signin(data)
  }
  // 定义 生命周期方法
  beforeCreate (): void {
  }
  // 完成了 data 数据的初始化，el没有
  async created () {
    this.methods_vueclass_test()
  }
  // 完成了 el 和 data 初始化
  beforeMount (): void {
  }
  // 完成挂载
  // mounted (): void {
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  h1 {
    line-height: 26px;
  }
}

</style>
