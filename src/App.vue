<template>
  <div id="app">
    <HelloWorld :msg="msg" :num="num"/>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import VueClass from './vueClass'
import HelloWorld from './components/HelloWorld.vue'

// 定义组件
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends VueClass {
  msg = 'Vue.js + TypeScript'
  num = 123

  async created () {
    this.storage.setItem('api', JSON.stringify(this.api))
    console.log(this.storage, 'created test this.storage')
    console.log(this.api, 'created test this.api')
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
