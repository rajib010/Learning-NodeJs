const express = require("express");
const shortId = require("shortid");
const URL = require("./userSchema.js")

const handleUrlCreation = async (req, res) => {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is required" });
    const shortId = shortId();
    await URL.create({
        shortId,
        redirectedUrl: body.url,
        visitCount: []
    });

    return res.json({ id: shortId })
}


const handleUrlRedirection = async (req, res) => {
    const shortId = req.params.shortId
   const entry= await URL.findOneAndUpdate({ shortId },
        {
            $push: {
                visitCount: {
                   timestamp: Date.now()
                }
            },
        }
    );

    res.redirect(entry.redirectedUrl)
}

module.exports = { handleUrlCreation, handleUrlRedirection };