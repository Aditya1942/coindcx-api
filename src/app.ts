import express, { Application } from "express";

const app: Application = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("Hello!");
});
app.listen(port, () => {
    return console.log(`server is listening on http://localhost:${port}`);
});
