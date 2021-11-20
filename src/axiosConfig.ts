import axios from "axios";
import { createHmac } from "crypto";
import dotenv from 'dotenv';
dotenv.config();
const BASE_URL = process.env.BASE_URL || 'https://api.coindcx.com';
// auth headers 
const key: string = process.env.COINDCX_API_KEY?.toString() || '';
const secret: string = process.env.COINDCX_SECRET?.toString() || '';
// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-AUTH-APIKEY': key,
    }
});

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.validateStatus = function (status) {
    return status >= 200 && status <= 500 // default
}
// Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export default instance;