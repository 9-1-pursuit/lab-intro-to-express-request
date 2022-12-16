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

app.get("/pokemon", (req, res) => {
    res.json(pokemon)
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})



//EXPORT
module.exports = app