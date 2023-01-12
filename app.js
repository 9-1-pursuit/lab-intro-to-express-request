const express = require("express")

const app = express()
const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])

// FIRST PART / BUG ROUTES

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(
        `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    )
})

app.get('/bugs', (req, res) => {
    res.send(
        `99 little bugs in the code <a href='http://localhost:8888/bugs/101'> pull one down, patch it around </a>`
    )
})

app.get('/bugs/101', (req, res) => {
    const numberOfBugs = 101
    res.send(
        `101 little bugs in the code <a href='http://localhost:8888/bugs/${numberOfBugs}'> Pull one down\, patch it around.</a>`
    )
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const { numberOfBugs } = req.params
    const allBugs = Number(numberOfBugs) + 2

    if (numberOfBugs < 200) {
        res.send(
        `<a href='http://localhost:8888/bugs/${allBugs}'>Pull one down, patch it around</a> ${numberOfBugs} little bugs in the code.`
        )
    } else {
        res.send(
          `Too many bugs!! Start over! <a href='http://localhost:8888/bugs'>restart</a>`
        );
    }
})

// POKEMON ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to 99 Pokemon')
})

app.get('/pokemon', (req, res) => {
    const allPokes = pokemon.map((pokemon) => pokemon)
    res.send(allPokes)
})

app.get('/pokemon/search', (req, res) => {
    const { name } = req.query
    const foundPoke = pokemon.filter(
        (allPokes) => allPokes.name.toLowerCase() === name.toLowerCase()
    )
    res.send(foundPoke)
})

app.get('/pokemon/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;

    if (arrayIndex < pokemon.length) {
        res.send(pokemon[arrayIndex])
    } else {
        res.send(`Sorry, no Pokemon found at ${arrayIndex}!`)
    }
})

modules.exports = app;