import { NewOrder } from "./newOrder";

export interface OrderInterface {
  AccountTradeHistory(): Promise<any>
  newOrder(order: NewOrder): Promise<any>
}


