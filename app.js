// Dependencies
const express = require("express");
const morgan = require("morgan");

const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

const app = express();

// Middleware, see HTTP requests
app.use(morgan("tiny"));

// Routes

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs < 200) {
    res.status(200).send(
      `<h1>${numberOfBugs} little bugs in the code</h1>
        <a href=/bugs/${+numberOfBugs + 2}>Pull one down, patch it around</a>`
    );
  } else {
    res.status(200).send("<a href=/bugs>Too many bugs!! Start over!</a>");
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
