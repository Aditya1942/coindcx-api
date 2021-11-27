import { Request, Response, Router } from 'express'
import Orders from '../services/Orders'
const router: Router = Router()

/**
 * @route GET /exchange/v1/orders/trade_history
 * @desc Get Account Trade History
 * @access Public
 */
router.get('/history/trade', async (_: Request, res: Response) => {
  try {
    const order: Orders = new Orders()
    const result = await order.AccountTradeHistory()
    if (result && result != "")
      res.send(result)
    else res.send('No data')
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/new', async (req: Request, res: Response) => {
  try {
    const order: Orders = new Orders()
    const result = await order.newOrder(req.body)
    if (result && result != "")
      res.send(result)
    else res.send('No data')
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router
