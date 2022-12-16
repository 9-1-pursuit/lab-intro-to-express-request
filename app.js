const express = require("express")
const morgan = require("morgan")
const pokemon = require("./models/pokemon.json")
const bugs = require("./models/bugs.js")
const { send } = require("express/lib/response")
const app = express()

// Middleware see Http requests
app.use(morgan("tiny"))

// Routes
// test   Send a welcome message
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon")
})

app.get("/bugs", (req, res) => {
  res.send(`99 little bugs in the code
    <a href="/bugs/101">pull one down, patch it around</a>
  `)
})

// bugs/:numberOfBugs
// sends an error link when too many bugs are requested
// sends a 'next' link when a small enough of bugs is requested
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params
  let num = +numberOfBugs + 2
  let answer
  const bugsOuote = "Pull one down, patch it around/"
  const bugsNum = "little bugs in the code"
  const redo = "Too many bugs!! Start over!"
  if (numberOfBugs >= 200) answer = redo
  if (numberOfBugs < 200)
    answer = `<a href =*${num}>${bugsOuote}</a>${numberOfBugs} ${bugsNum}`
  res.send(answer)
})

// sends the list  of pokemon
app.get("/pokemon", (req, res) => {
  res.send(pokemon)
})

// pokemon/search
//sends an empty array when the pokemon isn't found
//sends the pokemon when the name exactly matches
//sends the Pokemon when the name matches ignoring case
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query
  const search = name.toLowerCase()
  const answer = pokemon.filter((poke) => poke.name.toLowerCase() === search)
  res.send(answer || [])
})

// pokemon/:index
// sends a match when the index matches a pokemon
// sends a sorry message when no Pokemon is found at the index
app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params
  const answer = pokemon[index]
    ? pokemon[index]
    : `Sorry, no pokemon found at ${index}`
  res.send(answer)
})

// /:verb/:adjective/:noun
// dynamically use sends a congratulations adjective
app.get("/:verb/:adjective/:noun", (req, res) => {
  let { verb, adjective, noun } = req.params
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  )
})

module.exports = app
