const express = require("express")
const app = express()
const path = require("path")
// /bugs
const bugs = require("./route/bugs")
app.use("/bugs", bugs)
// /pokemon
const pokemon = require("./route/pokemon")
app.use("/pokemon", pokemon)
// /pokemon-pretty
const pokemonPretty = require("./route/pokemon-pretty")
app.use("/pokemon-pretty", pokemonPretty)
// to send html file in resp
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get("/", (req, resp) => {
    resp.send(`Welcome 99 Pokemon`)
})

//  verb, adj, noun
app.get("/:verb/:adj/:noun", (req, resp) => {
    const {verb, adj, noun} = req.params
    const sentence = `Congratulations on starting a new project called ${verb}-${adj}-${noun}!`
    
    resp.send(`${sentence}`)
})

module.exports = app