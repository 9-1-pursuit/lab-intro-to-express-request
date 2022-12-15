const express = require("express")
const app = express()

// Routes
app.get("/", (req, resp) => {
    resp.send("Home")
})

//  verb, adj, noun
app.get("/:verb/:adj/:noun", (req, resp) => {
    const {verb, adj, noun} = req.params
    const sentence = `Congratulations on starting a new project called ${verb}-${adj}-${noun}`
    resp.send(`${sentence}`)
})

// /bugs
app.get("/bugs", (req, resp) => {
    const string = `99 little bugs in the code<br>`
    const link = `<a href ="http://localhost:8888/bugs/101">pull one down, patch it around</a>`
    resp.send(`${string}${link}`)
})

app.get("/bugs/:numberOfBugs", (req,resp) => {
    const {numberOfBugs} = req.params
    const string = `${numberOfBugs} little bugs in the code`
    const plus2 = +numberOfBugs + 2
    const link = `<a href ="http://localhost:8888/bugs/${plus2}">pull one down, patch it around</a>`
    const homeLink = `<a href ="http://localhost:8888/">start over</a>`
    resp.send(`${+numberOfBugs > 200 ? homeLink : link}`)
})








module.exports = app