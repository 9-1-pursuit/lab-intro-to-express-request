const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
//* Bring in Pokemon Json() using
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// Poke Routes
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});
app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const finding = pokemon.filter(
    (pok) => pok.name.toLowerCase() === name.toLowerCase()
  );
  res.send(finding);
});
// map to get pokemon data
app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (indexOfArray < pokemon.length) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

//!
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href="http://localhost:8888/bugs/101">pull one down, patch it around </a>`
  );
});

//adding to the number of bugs
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const addTwo = +numberOfBugs + 2;
  if (numberOfBugs < 200) {
    res.send(
      `<a href='http://localhost:8888/bugs/${addTwo}'>Pull one down, patch it around </a> ${numberOfBugs} little bugs in the code `
    );
  } else {
    res.send(
      `Too many bugs!! Start over!<a href='http://localhost:8888/bugs'>pull one down, patch it around </a> `
    );
  }
});

module.exports = app;
