const express = require("express");
const shortid = require("shortid");
const URL = require("./userSchema.js")


const handleUrlCreation = async (req, res) => {
    const shortId = shortid();
    console.log(shortId);
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is required" });
    await URL.create({
        shortId,
        redirectedUrl: body.url,
        visitCount: []
    });

    const allUrl = await URL.find({});
    return res.render("home", { id: shortId, urls:allUrl });
}


const handleUrlRedirection = async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({ shortId },
        {
            $push: {
                visitCount: {
                    timestamp: Date.now()
                }
            },
        }
    );

    return res.redirect(entry.redirectedUrl);
}

module.exports = { handleUrlCreation, handleUrlRedirection };