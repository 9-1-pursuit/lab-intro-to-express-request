const express = require("express");

const app = express();

const bugsResponse = `<p>99 little bugs in the code</p>
    <a href={\"\"} target=\"blank\">
      pull one down, patch it around
    </a>`;
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(bugsResponse);
});

app.get("/:verb/:adj/:noun", (req, res) => {
  const { verb, adj, noun } = req.params;

  res.send(
    "Congratulations on starting a new project called " +
      `${verb}-${adj}-${noun}!`
  );
});

module.exports = app;
