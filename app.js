//import express configure app to be express
const express = require("express");
const app = express();
//import and use morgan
const morgan = require("morgan");
app.use(morgan("tiny"));
//import pokemon.json
const pokemon = require("./models/pokemon.json");

//VERB, ADJECTIVE, NOUN USING PARAMS

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// 99 BUGS IN CODE

//bugs home --> default 101

app.get("/bugs", (req, res) => {
  res.send(
    "<h1>99 little bugs in the code<h1> <a href='/bugs/101'>pull one down, patch it around<a>"
  );
});

// bugs href link --> param number + 2

app.get("/bugs/:num", (req, res) => {
  const { num } = req.params;
  console.log("num", num);

  // if param num > 200 render next link
  if (num < 200) {
    res.send(
      `<h1> ${num} little bugs in the code<h1> <a href=/bugs/${
        +num + 2
      }>Pull one down, patch it around<a>`
    );
    //else redirect to /bugs home
  } else {
    res.send(
      `<h1> ${num} little bugs in the code<h1> <a href=/bugs
      }>Too many bugs!! Start over!<a>`
    );
  }
});

//POKEMON

//welcome

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

//all pokemon
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

//pokemon search

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query;
  console.log("query", name.toUpperCase());
  if (name !== undefined) {
    pokemon.find((pokemon) => {
      pokemon.name.toUpperCase() === name.toUpperCase()
        ? res.send([pokemon])
        : res.send([]);
    });
  }
});

//  res.send(`sorry, no pokemon with the name ${name}`);

// 1 pokemon index --> returns one pokemon at pokemon[:index] or an error message
app.get("/pokemon/:index", (req, res) => {
  let { index } = req.params;

  if (index <= pokemon.length && index >= 0) {
    res.send(pokemon[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

//export
module.exports = app;
