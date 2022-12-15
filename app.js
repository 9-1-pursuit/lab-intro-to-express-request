//DEPENDENCIES
const express = require("express");
const app = express();

//ROUTES
app.get("/attentive/overwhelmed/developer", (req, res) => {
  res.send(
    "Congratulations on starting a new project called attentive-overwhelemd-developer"
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code <a href=/bugs/101 >pull one down, patch it around </a>"
  );
});

module.exports = app;
