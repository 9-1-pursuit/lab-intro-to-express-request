const express = require('express')
const morgan = require('morgan')
const pokemon = require('./models/pokemon.json')
const app = express()

app.use(morgan("tiny"))

//routes 

app.get('/', (req, res) =>{
    res.send(`Welcome 99 Pokemon`);
});


app.get('/bugs', (req, res) =>{
    res.send(
        `<h1>99 little bugs in the code</h1><a href='/bugs/101'>pull one down, patch it around<a>`
    );
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const { numberOfBugs } = req.params;
    const add = +numberOfBugs + 2;
  
    if (numberOfBugs < 200)
      res.send(
        `<a href='*${add}'>Pull one down, patch it around</a>${numberOfBugs} little bugs in the code `
      );
    else (numberOfBugs >= 200) 
    res.send(`Too many bugs!! Start over!`);
  });


  //pokemon
  app.get('/pokemon', (req, res) => {
    res.send(pokemon);
  });


  //search
  app.get('/pokemon/search', (req, res) => {
    const {name} = req.query
    const {search} = req.params
    if (!search) 
    pokemon.find((pokemon) => {
        pokemon.name.toLowerCase() === name.toLowerCase()
        ? res.send([pokemon])
        : res.send([]);
    });  
});

//index

app.get('/pokemon/:index', (req, res) =>{
    const {index} = req.params
    if(pokemon[index])
    res.send(pokemon[req.params.index])
    else
    res.send(`Sorry, no pokemon found at ${index}`)
});
  

//verb

  app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res
      .status(200)
      .send(
        `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
  });


  module.exports = app;
