import GenerateSignature from '../generateSignature'
import { OrderInterface } from '../models/Order.Interface'
import Axios from '../axiosConfig'
import { Apis } from '../enum/apis.enum'
import { NewOrder } from '../models/newOrder';

export default class Orders extends GenerateSignature
  implements OrderInterface {
  async newOrder(order: NewOrder): Promise<any> {
    const timeStamp = Math.floor(Date.now());
    const body = {
      market: order.market,
      side: order.side,
      order_type: order.order_type,
      price_per_unit: order.price_per_unit,
      total_quantity: order.total_quantity,
      time_stamp: timeStamp,
    }
    const signature = this.sign(body)
    const response = await Axios.post(Apis.NewOrder, body, {
      headers: {
        'X-AUTH-SIGNATURE': signature
      },

    })
    console.log(response)
    return response.data
  }
  async AccountTradeHistory(): Promise<any> {
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
