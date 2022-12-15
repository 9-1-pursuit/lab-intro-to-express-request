const express = require("express")
const app = express()

const bugs = require("./route/bugs")
app.use("/bugs", bugs)

const pokemon = require("./route/pokemon")
app.use("/pokemon", pokemon)
const pokeData = require("./models/pokemon.json")

// Routes
app.get("/", (req, resp) => {
    // const number = pokeData.length
    resp.send(`Welcome 99 Pokemon`)
})

//  verb, adj, noun
app.get("/:verb/:adj/:noun", (req, resp) => {
    const {verb, adj, noun} = req.params
    const sentence = `Congratulations on starting a new project called ${verb}-${adj}-${noun}!`
    resp.send(`${sentence}`)
})

// /bugs
// app.get("/bugs", (req, resp) => {
//     const string = `99 little bugs in the code<br>`
//     const link = `<a href ="http://localhost:8888/bugs/101">pull one down, patch it around</a>`
//     resp.send(`${string}${link}`)
// })

// app.get("/bugs/:numberOfBugs", (req,resp) => {
//     const {numberOfBugs} = req.params
//     const string = `${numberOfBugs} little bugs in the code<br>`
//     const plus2 = +numberOfBugs + 2
//     const link = `<a href ="http://localhost:8888/bugs/${plus2}">Pull one down, patch it around</a>`
//     const homeLink = `<a href ="http://localhost:8888/">Too many bugs!! Start over!</a>`
//     resp.send(`${+numberOfBugs >= 200 ? homeLink: string + link}`)
// })








module.exports = app