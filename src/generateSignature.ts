import { createHmac } from "crypto";

const sign = (body: any): string => {
    const secret: string = process.env.COINDCX_SECRET?.toString() || '';
    const payload = Buffer.from(JSON.stringify(body)).toString();
    const signature = createHmac('sha256', secret).update(payload).digest('hex')
    return signature;

}
export default sign;