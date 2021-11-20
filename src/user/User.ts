import Axios from "../axiosConfig";
import { Apis } from "../enum/apis.enum";
import sign from "../generateSignature";

export class User {

    public UserInfo = async (): Promise<any> => {
        const timeStamp = Math.floor(Date.now());
        const body = {
            "timestamp": timeStamp
        }
        const signature = await sign(body);
        const response = await Axios.post(Apis.UserInfo, body, {
            headers: {
                'X-AUTH-SIGNATURE': signature

            }
        });
        return response.data;
    }
    public UserBalance = async (): Promise<any> => {
        const timeStamp = Math.floor(Date.now());
        const body = {
            "timestamp": timeStamp
        }
        const signature = await sign(body);
        const response = await Axios.post(Apis.UserBalance, body, {
            headers: {
                'X-AUTH-SIGNATURE': signature
            }
        });
        return response.data;
    }

}