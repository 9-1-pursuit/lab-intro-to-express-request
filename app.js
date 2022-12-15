const express = require("express")
const app = express()
const morgan = require("morgan")
const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])

// Middleware see Http requests
app.use(morgan("tiny"))

// Routes
app.get("/", (req, res) => {
  res.send()
})
