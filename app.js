const express = require("express");
const pokemon = require("./models/pokemon.json");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  const bugs = 99;
  const data = `<p>${bugs} little bugs in the code</p>
    <a href="http://localhost:8888/bugs/${Number(bugs) + Number(2)}">
      pull one down, patch it around
    </a>`;
  res.send(data);
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  let data = "";

  if (numberOfBugs > 200) {
    data = `<p>${numberOfBugs} little bugs in the code</p>
      <a href="http://localhost:8888/bugs">
        start over
      </a>`;
  } else {
    data = `<p>${numberOfBugs} little bugs in the code</p>
      <a href="http://localhost:8888/bugs/${Number(numberOfBugs) + Number(2)}">
        pull one down, patch it around
      </a>`;
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

console.log(pokemon[0]);

module.exports = app;
