import { Vue } from 'vue-property-decorator'

import Api from './com/api.json'
import {httpRequest} from './com/http'

export default class VueClass extends Vue {
  $api: any = Api
  $httpRequest = new httpRequest()
}
