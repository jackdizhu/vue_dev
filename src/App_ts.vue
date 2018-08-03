<template>
  <div id="app">
    <div class="con-box">
      <p>msg: {{msg}}</p>
      <p>num: {{num}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import VueClass from '@/vueClass'
import { Component, Emit } from 'vue-property-decorator'

export default class App extends VueClass {
  msg = 'Vue.js + TypeScript'
  num = 123
  // 定义 methods 方法
  @Emit()
  methods_msg_add (n: string): void {
    // 编译警告错误: Property 'className' does not exist on type
    // this.$refs.dataMsg.className = 'on'
    this.msg += n
  }
  @Emit()
  methods_num_add (n: number): void {
    this.num += n
  }
  async created () {
    // this.storage.setItem('api', JSON.stringify(this.api))
    // console.log(this.storage, 'created test this.storage')
    // console.log(this.api, 'created test this.api')
  }
}
</script>

<style lang="less" scoped>
  .img-box{
    text-align: center;
    padding: 1rem;
  }
</style>
