const express = require('express')
const myMiddleware = require("./middleware.js")


const app = express();

app.use(myMiddleware)

app.get('/', (req, res) => {
    res.send(`Hello world, custom property ${req.customProperty}`);
})


app.listen(8002, () => {
    console.log("App is running on port 8002");
})