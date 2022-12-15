//DEPENDENCIES
const express = require("express")
const pokemon = require("./models/pokemon.json");
console.log(pokemon[0]);

//CONFIGURATION
const app = express()

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send(
        "<><h1>99 little bugs in the code</h1><p><a href='/bugs/101>pull one down, patch it around</a></p></>"
        )
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    res.send(`${numberOfBugs} little bugs in the code`)
})

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

//EXPORT
module.exports = app