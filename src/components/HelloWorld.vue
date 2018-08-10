<template>
  <div class="hello" :data-url="_activeRouteItemRoute">
    <p @click="methods_changeId">[修改vuex]_id: {{user._id}}</p>
    <h1>[修改data]dataMsg: <span @click="methods_dataMsg_add('1')" ref="dataMsg">{{ dataMsg }}</span></h1>
    <h1>[修改data]dataNum: <span @click="methods_dataNum_add(1)">{{ dataNum }}</span></h1>
    <h1>--------------</h1>
    <h1>[修改parent data]msg: <span @click="methods_msg_add('1')" ref="msg">{{ msg }}</span></h1>
    <h1>[修改parent data]num: <span @click="methods_num_add(1)">{{ num }}</span></h1>
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
  // 定义 props 属性
  @Prop() private msg!: string
  @Prop() private num!: number
  @Prop() private msg_add!: any
  @Prop() private num_add!: any
  // 定义 watch 方法
  @Watch('dataNum')
  Watch_dataNum(val: number, oldVal: number): void {
    // console.log(val, 123456)
  }
  // 定义 computed 方法
  get _activeRouteItemRoute(): string {
    return this.$route.path
    // return 'this.$route.path'
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
  methods_msg_add (n: string): void {
    // 编译警告错误: Property 'className' does not exist on type
    // this.$refs.dataMsg.className = 'on'
    this.$emit('msg_add', n)
  }
  @Emit()
  methods_num_add (n: number): void {
    this.$emit('num_add', n)
  }
  @Emit()
  methods_changeId (): void {
    let data = {
      _id: this.show_user_id + 'string',
      date: 123
    }
    // Mutation
    // this.USER_SIGNIN(data)
    // Action
    this.user_signin(data)
  }
  // 定义 生命周期方法
  beforeCreate (): void {
    console.log('beforeCreate ------------- el 和 data 并未初始化')
  }
  // 完成了 data 数据的初始化，el没有
  async created () {
    // Promise

    // this.httpRequest.request({
    //   url: this.api.test_get,
    //   type: 'GET',
    //   params: {}
    // }).then((res: any) => {
    //   console.log(res, 'res')
    // })
    // this.httpRequest.request({
    //   url: this.api.test_post,
    //   type: 'POST',
    //   params: {}
    // }).then((res: any) => {
    //   console.log(res, 'res')
    // })

    // async await

    let getRes = await this.httpRequest.request({
      url: this.api.test_get,
      type: 'GET',
      params: {}
    })
    console.log(getRes, 'getRes res')
    // 更新 vuex
    this.user_signin(getRes.data)

    let postRes = await this.httpRequest.request({
      url: this.api.test_post,
      type: 'POST',
      params: {}
    })
    console.log(postRes, 'postRes res')

    console.log('created ------------------ 完成了 data 数据的初始化，el没有')
  }
  // 完成了 el 和 data 初始化
  beforeMount (): void {
    console.log('beforeMount -------------- 完成了 el 和 data 初始化')
  }
  // 完成挂载
  mounted (): void {
    console.log('mounted ------------------ 完成挂载')
  }
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
