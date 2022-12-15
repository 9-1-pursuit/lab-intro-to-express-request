//DEPENDENCIES
const express = require("express");
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});
app.get("/attentive/overwhelmed/developer", (req, res) => {
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
      "101 little bugs in the code<a href=/bugs/103 >pull one down, patch it around </a>"
    );
});

app.get("/bugs", (req, res) => {
  res.send(
    "99 little bugs in the code <a href=/bugs/101 >pull one down, patch it around  </a>"
  );
});

module.exports = app;
