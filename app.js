//DEPENDENCIES
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);
const express = require('express')

//CONFIGURATION
const app = express()
const PORT = 8888

//ROUTES
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });
  app.get("/bugs", (req, res) => {
    res.send("<h1>99 little bugs in the code</h1>");
  });
  app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    if (numberOfBugs >= 200) {
      res.send("Too many bugs!! Start over!");
    } else {
      res.send(`${+numberOfBugs} little bugs in the code <a href="/bugs/${+numberOfBugs + 2}">Pull one down, patch it around</a>`);
    }
  });
  app.get("/pokemon", (req, res) => {
    res.send(pokemon);
  });
  app.get("/pokemon/search/?", (req, res) => {
    const {name} = req.query
    const foundPokeman = pokemon.find((poke) =>{
       return poke.name.toLowerCase() === name.toLowerCase()
    })
    if (foundPokeman) {
        res.send([foundPokeman])
    } else {
        res.send('[]')
    }
  });
  app.get("/pokemon/:index", (req, res) => {
    const {index} = req.params
    if(pokemon[index])
    res.send(pokemon[index])
    else(res.send(`Sorry, no pokemon found at ${index}`))
  });
  app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
  });


    
// EXPORT
module.exports = app;