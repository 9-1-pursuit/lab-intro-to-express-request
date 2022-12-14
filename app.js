const express = require("express");
const app = express();

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}`
  );
});

app.get("/bugs", (req, res) => {
  res.send(
    `99 little bugs in the code <a href="http://localhost:8888/bugs/101">pull one down, patch it around </a>`
  );
});

//adding to the number of bugs
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  const addTwo = +numberOfBugs + 2;
  if(numberOfBugs < 200){
    res.send(
    `${numberOfBugs} little bugs in the code <a href='http://localhost:8888/bugs/${addTwo}'>pull one down, patch it around and add 2 </a> `

  )
 
  } else{
    res.send(`${numberOfBugs} little bugs in the code <a href='http://localhost:8888/bugs/'>pull one down and go back home </a>`)
  }
  
});

module.exports = app;
