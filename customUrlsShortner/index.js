const express = require("express");
const mongoose = require("mongoose");
const URL = require("./userSchema.js");
const router = require("./router.js")


const app = express();

//set up a connection with database
const connection = async function(){
    try{
        await mongoose.connect('mongodb://localhost:27017/urlShortner');
        console.log("db connection successfull");
    }catch(error){
        console.log("Failed db connection", error);
    }
}
app.use(express.json());
app.use("/url", router);




connection();







const port = 8003;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})