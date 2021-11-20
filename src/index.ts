import express, { Application } from "express";
import { createOrder } from "./user/User_Info";
import dotenv from "dotenv";
import axiosConfig from "./axiosConfig";
import axios from "axios";
import { createHmac } from "crypto";

const app: Application = express();
const port = 3000;
dotenv.config();
app.get("/", async (req, res) => {
    const key: string = await process.env.COINDCX_API_KEY?.toString() || '';
    const secret: string = await process.env.COINDCX_SECRET?.toString() || '';
    const order = await createOrder(key, secret);
    res.send(order);
});
app.listen(port, () => {
    return console.log(`server is listening on http://localhost:${port}`);
});
; (async function () {

}()
);