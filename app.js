// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");

// DATA
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

app.use(morgan("tiny"));

// ROUTES

app.get("/bugs", (req, res) => {
  res.send(`<h1>99 little bugs in the code</h1>`);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;

  if (numberOfBugs >= 200) {
    res.send(`<a href='/bugs/'>Too many bugs!! Start over!</a>`);
  } else {
    res.send(
      `<a href='/bugs/${
        +numberOfBugs + 2
      }'>Pull one down, patch it around</a>${+numberOfBugs} little bugs in the code`
    );
  }
});

// POKEMON

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  pokemon.forEach((item) => {
    if (name.toLowerCase() === item.name.toLowerCase()) {
      res.send([item]);
    } else {
      res.send([]);
    }
  });
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;

  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

module.exports = app;
