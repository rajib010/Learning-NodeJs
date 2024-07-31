const mongoose = require("mongoose");

const URL = mongoose.model("urlSchema", {
    shortId: {
        type: String,
        unique: true,
        required: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    visitCount: [{
        timestamp: { type: Number }
    }]
},
    {
        timestamp: true
    });
    
module.exports = URL;