import axios from "axios";
import { createHmac } from "crypto";

export class UserInfo {
    private secret: string;
    private baseurl: string;
    constructor(params: { key: string, secret: string, baseurl: string }) {
        this.secret = params.secret;
        this.baseurl = params.baseurl;
    }
    public UserInfo = async (): Promise<any> => {
        const timeStamp = Math.floor(Date.now());
        const body = {
            "timestamp": timeStamp
        }
        const sign = this.sign(body);
        const url = `${this.baseurl}/api/v1/user/info`;
        const headers = {
            "X-API-SIGNATURE": sign
        };
        const response = await axios.post(url, body, { headers });
        return response.data;
    }



    private sign = (body: any): string => {
        const payload = Buffer.from(JSON.stringify(body)).toString();
        const signature = createHmac('sha256', this.secret).update(payload).digest('hex')
        return signature;
    }
}