import GenerateSignature from '../generateSignature'
import { OrderInterface } from '../models/Order.Interface'
import Axios from '../axiosConfig'
import { Apis } from '../enum/apis.enum'

export default class Orders extends GenerateSignature
  implements OrderInterface {
  async AccountTradeHistory (): Promise<any> {
    const timeStamp = Math.floor(Date.now())
    const body = {
      timestamp: timeStamp,
      market: 'BTCINR' //Replace 'SNTBTC' with your desired market pair.
    }
    const signature = await this.sign(body)
    const response = await Axios.post(Apis.AccountTradeHistory, body, {
      headers: {
        'X-AUTH-SIGNATURE': signature
      }
    })
    console.log(response)
    return response.data
  }
}
