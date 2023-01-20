// Dependencies

const express = require("express");

//configuration

const app = express();
const PORT = 3004;

//Routes

// triple params
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  // either or 👇🏿
  //   const { verb } = req.params;
  //   const { adjective } = req.params;
  //   const { noun } = req.params;

  res.send(
    `<h1>Congratulations on starting a new project called ${verb}-${adjective}-${noun}!<h1> `
  );
});

// 99 bugs
app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code<h1>, <a href=http://localhost:3004/bugs/101 >pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code<h1>, <a href=/bugs/${
        +numberOfBugs + 2
      } >pull one down, patch it around</a>`
    );
  } else {
    res.send(
      `<h1>${numberOfBugs} little bugs in the code<h1>, <a href=http://localhost:3004/bugs>ok this is getting crazy lets go back.</a>`
    );
  }
});

//Pokemon
const pokemon = require("./models/pokemon.json");
console.log(pokemon.map((poke) => poke.name));

app.get("/pokemon/search", (req, res) => {
  const { name } = req.query; // deconstructing name from req(uest) and query params
  const match = pokemon.filter(
    (el) => el.name.toLowerCase() === name.toLowerCase()
  );
  res.status(200).send(match);
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/Pokemon", (req, res) => {
  res.send(
    `<h1>all ${pokemon.length} Pokemon ${pokemon.map(
      (poke) => `<li> ${poke.name}</li>`
    )} </h1> `
  );
});
//listen
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
