<template>
  <div>
    <!--<img :src="logo">-->
  </div>
</template>

<script>
// import logo from '@/assets/logo.png'

export default {
  name: 'app',
  data: () => {
    return {}
  },
  // 父组件数据
  props: [],
  // 组件
  components: {},
  // 计算
  computed: {},
  // 数据监听
  watch: {},
  // 事件方法
  methods: {},
  // el 和 data 并未初始化
  beforeCreate() {
  },
  // 完成了 data 数据的初始化，el没有
  created() {
    this.$http.get(this.$api.mock).then(res => {
      console.log(res, 'this.$api.mock')
    })
  },
  // 完成了 el 和 data 初始化
  beforeMount() {
  },
  // 完成挂载
  mounted() {
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
