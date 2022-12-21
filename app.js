const express = require("express");
const morgan = require("morgan")

const pokemon = require("./models/pokemon.json");
const app = express();

app.use(morgan("tiny"))


//bugs
app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>`)
});


app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } =req.params
if(numberOfBugs >= 200){
    res.send(`Too many bugs!! Start over!`)
}else{
    res.send(`<a href="/bugs/${+numberOfBugs + 2}">Pull one down, patch it around</a>${+numberOfBugs} little bugs in the code`)

}
});


//pokemon


app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/search", (req, res) => {
const { name } = req.query    

pokemon.forEach((pok) => {
    if(name.toLowerCase() === pok.name.toLowerCase()){
        res.send([pok])
    }else{
        res.send([])
        done()

    }
})
})

app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params;
    if (pokemon[index]){
        res.send(pokemon[index]);
    } else{
        res.send(`Sorry, no pokemon found at ${index}`);
    }
  });



//congratulations
app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(
      `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
    );
  });  



module.exports = app;
