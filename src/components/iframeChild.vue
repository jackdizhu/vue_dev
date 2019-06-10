<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>App</h2>
    <button @click="changeIframeParentMsg">
      change iframe parent msg
    </button>
    <button @click="changeIframeParentMsg2">
      change iframe parent message
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'iframeChild'
    }
  },
  created () {
    window.onVueMsg = (str, obj) => {
      if (str === 'msg') {
        this.msg = obj.msg
      }
    }
    window.addEventListener('message', (data) => {
      let {str, obj} = data.data
      if (str === 'msg') {
        this.msg = obj.msg
      }
    }, false)
    setTimeout(() => {
      this.$emit('on-loading', 0)
    }, 500)
    let str = encodeURIComponent('哈哈')
    axios.defaults.headers.aaa = str
    axios.get('http://localhost:8080')
      .then((res) => {
        console.log(res, 11)
      })
      .catch((err) => {
        console.log(err, 22)
      })
  },
  methods: {
    parentWindowRunFn (str, obj) {
      let parentW = (window.parent && window.parent.window) || {}
      if (typeof parentW[str] === 'function') {
        parentW[str](...obj)
      }
    },
    changeIframeParentMsg () {
      this.parentWindowRunFn('onVueMsg', ['msg', {msg: 'change iframe parent msg'}])
    },
    changeIframeParentMsg2 () {
      this.parentWindowRunFn('postMessage', [{
        str: 'msg', obj: {msg: 'change iframe parent message'}
      }])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
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
