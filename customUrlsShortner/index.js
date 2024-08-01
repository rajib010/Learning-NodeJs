const express = require("express");
const mongoose = require("mongoose");
const URL = require("./userSchema.js");
const router = require("./router.js");
const staticRoute = require("./staticRouter.js");
const path = require("path")


const app = express();

//set up a connection with database
const connection = async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017/urlShortner');
        console.log("db connection successfull");
    } catch (error) {
        console.log("Failed db connection", error);
    }
}

app.set("view engine", "ejs");
app.set("views", path.resolve("./customUrlsShortner/views"))


app.use(express.json());
//for form data
app.use(express.urlencoded({ extended: false }));
app.use("/url", router);
app.use("/", staticRoute);


connection();







const port = 8003;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})