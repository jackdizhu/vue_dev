import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator'

import Api from './com/api.json'
import {httpRequest} from './com/http'
import {storage} from './com/com'

// target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
// propertyKey: 成员的名字
// descriptor: 成员的属性描述符 {value: any, writable: boolean, enumerable: boolean, configurable: boolean}

// 方法装饰器
const Mounted = function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  let key = propertyKey
  let fun = descriptor.value
  target['Mounted'] = target['Mounted'] || {}
  target['Mounted'][key] = fun
  console.log(1, target)
}
// 属性装饰器
const Phone = function (target: any, propertyKey: string) {
  let key = propertyKey
  target['val'] = target['val'] || {}
  target['val'][key] = '100'
  console.log(1, target)
}

// VueClass 中定义的方法 会挂在 method 属性上
export default class VueClass extends Vue {
  constructor (...obj: any[]) {
    super(obj)
  }

  @Phone
  public phone: string = '130'
  public api: any = Api
  // 不能继承多个 类 使用属性代替
  public httpRequest = new httpRequest()
  public storage = new storage()

  // 私有方法
  private  methods_vueclass_private() {
    console.log(1, 'VueClass methods_vueclass_private')
  }
  // 保护方法（可继承的方法）
  protected methods_vueclass_protected() {
    console.log(1, 'VueClass methods_vueclass_protected')
  }

  public created () {
    console.log(1, 'VueClass created')
  }
  @Mounted
  public mounted () {
    console.log(1, this.$el)
  }

  // 定义 methods 方法
  @Emit()
  public methods_vueclass_test () {
    console.log(1, 'VueClass methods_vueclass_test')
  }
}
