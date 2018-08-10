import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'

import Api from './com/api.json'
import {httpRequest} from './com/http'
import {storage} from './com/com'

// VueClass 中定义的方法 会挂在 method 属性上
export default class VueClass extends Vue {
  constructor (...obj: any[]) {
    super(obj)
  }

  public api: any = Api
  // 不能继承多个 类 使用属性代替
  public httpRequest = new httpRequest()
  public storage = new storage()

  public created () {
    console.log(1, 'VueClass created')
  }
  public mounted () {
    console.log(1, this.$el)
  }

  // 定义 methods 方法
  @Emit()
  public methods_vueclass_test () {
    console.log(1, 'VueClass methods_vueclass_test')
  }
}
