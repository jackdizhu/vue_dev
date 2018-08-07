import { Vue } from 'vue-property-decorator'

import Api from './com/api.json'
import {httpRequest} from './com/http'
import {storage} from './com/com'

export default class VueClass extends Vue {
  public api: any = Api
  // 不能继承多个 类 使用属性代替
  public httpRequest = new httpRequest()
  public storage = new storage()
}
