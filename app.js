// Dependencies
const express = require("express");
const morgan = require("morgan");

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

const app = express();

// Middleware, see HTTP requests
app.use(morgan("tiny"));

// Routes

app.get("/", (req, res) => {
  res.status(200).send("Welcome 99 Pokemon");
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const match = pokemon.filter(
    (el) => el.name.toLocaleLowerCase() === name.toLowerCase()
  );
  res.status(200).send(match);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.status(200).send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/pokemon", (req, res) => {
  res.status(200).send(pokemon);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.status(200).send(
      `<h1>${numberOfBugs} little bugs in the code</h1>
        <a href=/bugs/${+numberOfBugs + 2}>Pull one down, patch it around</a>`
    );
  } else {
    res.send("<a href=/bugs>Too many bugs!! Start over!</a>");
  }
});

app.get("/bugs", (req, res) => {
  console.log(req.url);
  res
    .status(200)
    .send(
      "<h1>99 little bugs in the code</h1><a href=/bugs/101>Pull one down, patch it around</a>"
    );
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res
    .status(200)
    .send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
});

module.exports = app;
