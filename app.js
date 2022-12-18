const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  const bugs = 99;
  const data = `<p>${bugs} little bugs in the code</p>
    <a href=http://localhost:8888/bugs/${
      Number(bugs) + Number(2)
    }>Pull one down, patch it around</a>`;
  res.send(data);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  let data = "";

  if (numberOfBugs >= 200) {
    data = `<p>${numberOfBugs} little bugs in the code</p>
      <a href=http://localhost:8888/bugs>
      Too many bugs!! Start over!</a>`;
  } else {
    data = `<p>${numberOfBugs} little bugs in the code</p>
      <a href=http://localhost:8888/bugs/${
        Number(numberOfBugs) + Number(2)
      }>Pull one down, patch it around</a>`;
  }

  res.send(data);
});

app.get("/:verb/:adj/:noun", (req, res) => {
  const { verb, adj, noun } = req.params;

  res.send(
    "Congratulations on starting a new project called " +
      `${verb}-${adj}-${noun}!`
  );
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const data = pokemon.find((el) => {
    return el.name.toLowerCase() === name.toLowerCase();
  });
  data ? res.send([data]) : res.send([]);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;

  pokemon[indexOfArray]
    ? res.send(pokemon[indexOfArray])
    : res.status(404).send(`Sorry, no pokemon found at ${indexOfArray}`);
});

module.exports = app;
