const express = require("express")
let router = express.Router()
const data = require("../models/pokemon.json")
const filePath = __dirname.split("/").slice(0,7).join("/")
// res.sendFile(path [, options] [, fn])

router.get("/", (req, resp) => {
    resp.sendFile(filePath+'/public/prettyHome.html') 
})

module.exports = router