<template>
  <div id="app">
    <p>_id: {{show_user_id}}</p>
    <h1>++++++++++++++++++++++++++</h1>
    <HelloWorld :msg="msg" :num="num" @msg_add="methods_msg_add" @num_add="methods_num_add"/>
    <h1>++++++++++++++++++++++++++</h1>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import VueClass from '@/vueClass'
import { Component, Emit } from 'vue-property-decorator'
import { State, Action, Mutation, Getter } from 'vuex-class'
import HelloWorld from './components/HelloWorld.vue'

// 定义组件
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends VueClass {
  @Getter show_user_id: any

  msg = 'Vue.js + TypeScript'
  num = 123
  
  @Emit() // $emit('on-change', this.msg)
  onChange () {
    console.log(this.value, 'onChange')
    return this.msg
  }
  
  // 定义 methods 方法
  methods_msg_add (n: string): void {
    // 编译警告错误: Property 'className' does not exist on type
    // this.$refs.dataMsg.className = 'on'
    this.msg += n + this.api.version
  }
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
