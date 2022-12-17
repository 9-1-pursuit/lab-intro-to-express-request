//DEPENDENCIES
const express = require("express")
const morgan = require("morgan")
const pokemon = require("./models/pokemon.json");

//CONFIGURATION
const app = express()

//MIDDLEWARE
app.use(morgan("tiny"))

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

//ROUTES FOR BUGS
app.get("/bugs", (req, res) => {
    res.send(
        "<h1>99 little bugs in the code</h1><a href=/bugs/101>Pull one down, patch it around</a>"
      );
  })

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if(numberOfBugs < 200){
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href=/bugs/${+numberOfBugs+2}>Pull one down, patch it around</a>`)
    } else {
    res.send("<a href=/bugs>Too many bugs!! Start over!</a>")
    } 
}) 

//ROUTES FOR POKEMON
app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const match = pokemon.filter((poke) => poke.name.toLowerCase() === name.toLowerCase())
    if(match){
        res.send(match)
    } else {
        res.send("[]")
    }
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

//ROUTES FOR BONUSES
app.get("/pokemon-pretty", (req, res) => {
    pokemon.map(poke => res.send(`<ul><li><a href=/pokemon-pretty/${pokemon.indexOf(poke)}>${poke.name}</a></li></ul>`))
})

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]){
        res.send(`<h1>${pokemon[indexOfArray].name}</h1><img src=${pokemon[indexOfArray].img} alt=${pokemon[indexOfArray].name}></img>`)
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})

//EXPORT
module.exports = app