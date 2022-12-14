const e = require("express");
const express = require("express");
const morgan = require("morgan");
const app = express();
const pokemon = require("./models/pokemon.json");

app.use(morgan("tiny"));

app.get(`/:verb/:adjective/:noun`, (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get(`/`, (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get(`/bugs`, (req, res) => {
  res.send(`99 little bugs in the code
  99 little bugs
  <a href=/bugs/101'>pull one down, patch it around</a>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const addTwo = +numberOfBugs + 2;

  if (numberOfBugs < 200)
    res.send(
      `<a href='*${addTwo}'>Pull one down, patch it around</a>${numberOfBugs} little bugs in the code `
    );
  if (numberOfBugs >= 200) res.send(`Too many bugs!! Start over!`);
});

app.get(`/pokemon`, (req, res) => {
  res.send(pokemon);
});

app.get(`/pokemon/search`, (req, res) => {
  //   const { search } = req.params;
  const { name } = req.query;

  for (let i = 0; i < pokemon.length; i++) {
    if (name.toLowerCase() === pokemon[i].name.toLowerCase()) {
      res.send([pokemon[i]]);
    } else {
      res.send([]);
    }
  }
});

app.get(`/pokemon/:indexOfArray`, (req, res) => {
  const { indexOfArray } = req.params;

  if (pokemon[indexOfArray]) res.send(pokemon[req.params.indexOfArray]);
  else {
    res.send(`Sorry, no pokemon found at ${[indexOfArray]}`);
  }
});

module.exports = app;
