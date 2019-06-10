<template>
  <div>
    <slot :data="name"></slot>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: {
        a: 'q',
        b: 'ss'
      }
    }
  }
}
</script>
