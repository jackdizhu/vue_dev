<template>
  <div class="hello">
    <h1>dataMsg: <span @click="methods_dataMsg_add('1')">{{ dataMsg }}</span></h1>
    <h1>dataNum: <span @click="methods_dataNum_add(1)">{{ dataNum }}</span></h1>
    <h1>--------------</h1>
    <h1>msg: {{ msg }}</h1>
    <h1>num: {{ num }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';

interface GetRes {
  code: string,
  data: {
    readonly _id: string
    date: number
  }
}

@Component
export default class HelloWorld extends Vue {
  // 定义 data 数据
  dataMsg:string = 'dataMsg'
  dataNum:number = 11
  // 定义 props 属性
  @Prop() private msg!: string
  @Prop() private num!: number
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
    // this.dataMsg += n + this.$api.version
    this.dataMsg += n
  }
  @Emit()
  methods_dataNum_add (n: number): void {
    this.dataNum += n
  }
  // 定义 生命周期方法
  beforeCreate (): void {
    console.log('beforeCreate ------------- el 和 data 并未初始化')
  }
  // 完成了 data 数据的初始化，el没有
  async created () {
    // Promise

    // this.$httpRequest.request({
    //   url: this.$api.test_get,
    //   type: 'GET',
    //   params: {}
    // }).then(res => {
    //   console.log(res, 'res')
    // })
    // this.$httpRequest.request({
    //   url: this.$api.test_post,
    //   type: 'POST',
    //   params: {}
    // }).then(res => {
    //   console.log(res, 'res')
    // })

    // async await

    // let getRes: GetRes = await this.$httpRequest.request({
    //   url: this.$api.test_get,
    //   type: 'GET',
    //   params: {}
    // })
    // console.log(getRes, 'getRes res')

    // let postRes = await this.$httpRequest.request({
    //   url: this.$api.test_post,
    //   type: 'POST',
    //   params: {}
    // })
    // console.log(postRes, 'postRes res')

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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
