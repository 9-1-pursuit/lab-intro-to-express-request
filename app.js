const express = require('express');
const morgan = require('morgan');
//config
const app = express();
const pokemon = require('./models/pokemon.json');
//console.log(pokemon[0]);

//middleware (view HTTP request)
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
  res.send(`Welcome 99 Pokemon`);
});
app.get('/bugs', (req, res) => {
  res.send(`99 little bugs in the code
    99 little bugs
    Pull one down
    Patch it around
    101 bugs in the code')
    `);
});
app.get('/bugs/:numberOfBugs', (req, res) => {
  const { numberOfBugs } = req.params;
  const addtwo = +numberOfBugs + 2;

  if (numberOfBugs < 200)
    res.send(
      `<a href='*${addtwo}'>Next</a>${numberOfBugs} little bugs in the code `
    );
  if (numberOfBugs >= 199) res.send(`Too many bugs!! Start over!`);
});

// Pokemon
app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

//Search

app.get('/pokemon/search', (req, res) => {
  let { search } = req.params;

  let { name } = req.query;
  name.toLowerCase();
  console.log(name);
  if (!search) {
    res.send([]);
  } else if (pokemon[search] === name) {
    res.send(pokemon[req.params.search]);
    res.send(req.params.name.toLowercase() === name.toLowerCase());
  }
});

// Index

app.get('/pokemon/:index', (req, res) => {
  const { index } = req.params;

  if (pokemon[index]) res.send(pokemon[req.params.index]);
  else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

// Verb,  adj, noun 
app.get('/:verb/:adjective/:noun', (req, res) => {
  let { verb, adjective, noun } = req.params;
 
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});
app.get('/jumping/joyous/jellybean', (req, res) => {
  res.send(
    'Congratulations on starting a new project called jumping-joyous-jellybean!'
  );
});

module.exports = app;