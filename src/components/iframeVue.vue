<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <VSlort>
      <template slot-scope="scope">
        <div>
          {{scope.data}}
        </div>
      </template>
    </VSlort>
    <h2>App</h2>
    <button @click="changeIframeChildMsg">
      change iframe child msg
    </button>
    <button @click="changeIframeChildMsg2">
      change iframe child postMessage
    </button>
    <iframe id="iframe1" src="/#/page/iframeChild" frameborder="0" width="500px" height="300px"></iframe>
  </div>
</template>

<script>
import VSlort from './vSlot'
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {
    VSlort
  },
  data () {
    return {
      msg: 'iframeVue'
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
    // setTimeout(() => {
    //   this.$emit('on-loading', 0)
    // }, 500)
    // let str = encodeURIComponent('哈哈')
    // axios.defaults.headers.aaa = str
    // axios.get('http://localhost:8080')
    //   .then((res) => {
    //     console.log(res, 11)
    //   })
    //   .catch((err) => {
    //     console.log(err, 22)
    //   })
  },
  methods: {
    parentWindowRunFn (str, obj) {
      let iframe1 = document.getElementById('iframe1')
      let parentW = (iframe1 && iframe1.contentWindow) || {}
      if (typeof parentW[str] === 'function') {
        parentW[str](...obj)
      }
    },
    changeIframeChildMsg () {
      this.parentWindowRunFn('onVueMsg', ['msg', {msg: 'change iframe parent msg'}])
    },
    changeIframeChildMsg2 () {
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
