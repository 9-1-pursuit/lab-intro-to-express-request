const express = require("express");

//configuration
const app = express();

//ROUTES
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href='http://localhost:8888/bugs/101'>pull one down, patch it around</a>`
  );
});

app.get("/bugs/101", (req, res) => {
  const numberOfBugs = 103;
  res.send(
    `101 little bugs in the code <a href='http://localhost:8888/bugs/${numberOfBugs}'>pull one down, patch it around</a>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const sum = Number(numberOfBugs) + 2;

  if (numberOfBugs < 200) {
    res.send(
      `${numberOfBugs} bugs left in the code <a href='http://localhost:8888/bugs/${sum}
    '>pull one down, patch it around</a>`
    );
  } else {
    res.send(
      `${numberOfBugs} bugs left in the code <a href='http://localhost:8888/bugs'>restart</a>`
    );
  }
});

//export
module.exports = app;
