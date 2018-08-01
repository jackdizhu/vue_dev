declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.json' {
  const value: any
  export default value
}
declare module 'vue/types/vue' {
  interface Vue {
    api: any,
    httpRequest: any,
    storage: any
  }
}
