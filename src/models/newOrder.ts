// newOrder Models 
export interface NewOrder {
    side: side
    order_type: order_type
    market: string
    price_per_unit: number
    total_quantity: number
}
export enum order_type {
    limit_order = "limit_order",
    market_order = "market_order",
}
export enum side {
    buy = 'buy',
    sell = 'sell',

}