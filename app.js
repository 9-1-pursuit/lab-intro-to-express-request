const express = require("express");
//configuration
const app = express();
//pokemon
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

//ROUTES
//!pokemon
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  const pokes = pokemon.map((pokemon) => pokemon);
  res.send(pokes);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const found = pokemon.filter(
    (poke) => poke.name.toLowerCase() === name.toLowerCase()
  );

  res.send(found);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  if (indexOfArray < pokemon.length) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

//?first part
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//*bugs
app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>`
  );
});

app.get("/bugs/101", (req, res) => {
  const numberOfBugs = 103;
  res.send(
    `101 little bugs in the code <a href='http://localhost:8888/bugs/${numberOfBugs}'>Pull one down\, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const sum = Number(numberOfBugs) + 2;

  if (numberOfBugs < 200) {
    res.send(
      `<a href='http://localhost:8888/bugs/${sum}'>Pull one down, patch it around</a> ${numberOfBugs} little bugs in the code`
    );
  } else {
    res.send(
      `Too many bugs!! Start over! <a href='http://localhost:8888/bugs'>restart</a>`
    );
  }
});

//export
module.exports = app;
