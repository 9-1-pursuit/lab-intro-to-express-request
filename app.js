//Imports
const express = require("express")
const pokemon = require("./models/pokemon.json")
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send(`Welcome 99 Pokemon`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const { numberOfBugs } = req.params
    if(numberOfBugs >= 200) {
        res.send("Too many bugs!! Start over!")
    } else {
        res.send(`<a href='/bugs/:${+numberOfBugs + 2}'>Pull one down, patch it around <a>${numberOfBugs} little bugs in the code`)
    }
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
})

app.get('/pokemon/search', (req, res) => {
    const {name} = req.query
    for (p of pokemon) {
        if(name.toLowerCase() === p.name.toLowerCase()) {
            res.send([p])
        } else {
            res.send([])
        }
    }  
})   


app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params
    if(pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
})



//Export
module.exports = app