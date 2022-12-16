const express = require("express")
let router = express.Router()

router.get("/", (req, resp) => {
    const string = `99 little bugs in the code<br>`
    const link = `<a href ="http://localhost:8888/bugs/101">pull one down, patch it around</a>`
    
    resp.send(`${string}${link}`)
})

router.get("/:numberOfBugs", (req,resp) => {
    const {numberOfBugs} = req.params
    const string = `${numberOfBugs} little bugs in the code<br>`
    const plus2 = +numberOfBugs + 2
    const link = `<a href ="http://localhost:8888/bugs/${plus2}">Pull one down, patch it around</a>`
    const homeLink = `<a href ="http://localhost:8888/">Too many bugs!! Start over!</a>`
    const display = +numberOfBugs >= 200 ? homeLink: string + link

    resp.send(display)
})

module.exports = router