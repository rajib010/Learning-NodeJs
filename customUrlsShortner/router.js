const express= require("express");
const {handleUrlCreation, handleUrlRedirection} = require("./controller.js")

const router = express.Router();
router.post("/",handleUrlCreation);
router.get("/:shortId", handleUrlRedirection);

module.exports= router;