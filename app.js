//DEPENDENCIES
const express = require("express");

const pokemon = require("./models/pokemon.json");

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/semiattentive/overwhelmed/developer", (req, res) => {
  res.send(
    "Congratulations on starting a new project called attentive-overwhelemd-developer"
  );
});
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  console.log(numberOfBugs);
  if (numberOfBugs >= 200)
    res.send("Too many bugs!! Start over!<a href=/bugs>start over</a>");
  else
    res.send(
      `${numberOfBugs} little bugs in the code<a href="/bugs/${
        +numberOfBugs + 2
      }">Pull one down, patch it around </a>`
    );
});

app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code <a href=/bugs/101 >ull one down, patch it around  </a>"
  );
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) res.send(pokemon[index]);
  else res.send(`Sorry, no pokemon found at ${index}`);
});

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  const foundPokemon = pokemon.find((poke) => {
    return poke.name.toUpperCase() === name.toUpperCase();
  });

  if (foundPokemon) res.send(foundPokemon);
});

module.exports = app;
