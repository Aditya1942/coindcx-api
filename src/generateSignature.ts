import { createHmac } from 'crypto'
export default class GenerateSignature {
  public sign = (body: { timestamp: string } | any): string => {
    const secret: string = process.env.COINDCX_SECRET?.toString() || ''
    const payload = Buffer.from(JSON.stringify(body)).toString()
    const signature = createHmac('sha256', secret)
      .update(payload)
      .digest('hex')
    return signature
  }
}
