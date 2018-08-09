<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestJs',
  data () {
    return {
      msg: 'Vue lang javascript'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
    h1 {
      font-size: 14px;
      color: #666;
    }
  }

</style>
