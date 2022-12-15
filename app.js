// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();

// Middleware to see HTTP requests
app.use(morgan("tiny"));

// WELCOME ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// BUGS ROUTES
app.get("/bugs", (req, res) => {
  res.send(
    `<h1 style="color: purple; text-align: center">99 little bugs in the code</h1>`
  );
});

// NUMBER OF BUGS ROUTES
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const plusTwo = +numberOfBugs + 2;

  if (numberOfBugs < 200) {
    res.send(
      `<a href='${plusTwo}'>Pull one down, patch it around</a> ${numberOfBugs} little bugs in the code`
    );
  }
  if (numberOfBugs >= 200) res.send("Too many bugs!! Start over!");
});

// POKEMON ROUTES
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// SEARCHED POKEMON ROUTES
app.get(`/pokemon/search`, (req, res) => {
  const { name } = req.query;

  for (let i = 0; i < pokemon.length; i++) {
    if (name.toLowerCase() === pokemon[i].name.toLowerCase()) {
      res.send([pokemon[i]]);
    } else {
      res.send([]);
    }
  }
});

// SEARCHED POKEMON ROUTE
app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) res.send(pokemon[req.params.index]);
  else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

// VERB ADJECTIVE NOUN ROUTE
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// EXPORT
module.exports = app;
