import express, { Request, Response, Router } from 'express'
import { User } from '../services/User'
import { Balance } from '../models/balance'
import { UserInfo } from '../models/userInfo'
const router: Router = express.Router()

router.get('/', async (_: Request, res: Response) => {
  try {
    const user: User = new User()
    const resData: UserInfo = await user.UserInfo()
    res.send(resData)
  } catch (error) {
    res.status(500).send(error)
  }
})
router.get('/balance', async (_: Request, res: Response) => {
  try {
    const user: User = new User()
    const resData: Balance[] = await user.UserBalance()
    res.send(
      resData.filter(item => {
        return parseFloat(item.balance) !== 0
      })
    )
  } catch (error) {
    res.status(500).send(error)
  }
})
export default router
