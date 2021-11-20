
import { createHmac } from "crypto";
import Axios from "../axiosConfig";
import dotenv from "dotenv";
dotenv.config();

export const createOrder = async (key: string, secret: string) => {
    const baseurl = "https://api.coindcx.com"
    const timeStamp = Math.floor(Date.now());
    const body = {
        "timestamp": timeStamp
    }
    const payload = Buffer.from(JSON.stringify(body)).toString();
    const signature = createHmac('sha256', secret).update(payload).digest('hex')

    console.log(Axios.defaults.headers.common)
    return Axios.post("/exchange/v1/users/info", body, {
        headers: {
            'X-AUTH-SIGNATURE': signature
        },
    })
        .then(function (response: any) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error: any) {
            console.log(error)
            return error
        })

    // const response = await Axios.get('/exchange/ticker',);
    // return response.data;

}
