import express, { Application } from 'express'
import dotenv from 'dotenv'
import userRouter from './controllers/UserRouter'
import orderRouter from './controllers/OrderRouter'
const app: Application = express()
const port = 3000
app.use(express.json()),
  // init function
  (() => {
    dotenv.config()
  })()

app.use('', userRouter)
app.use('/order', orderRouter)

app.listen(port, () => {
  return console.log(`server is listening on http://localhost:${port}`)
})
