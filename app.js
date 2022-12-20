//DEPENDENCIES
const express = require('express')
const morgan = require("morgan")
const pokemon = require("./models/pokemon.json");
const app = express()

//console.log(pokemon[0]); able to get data

//MIDDLEWARE
app.use(morgan('tiny'))

//ROUTES
//passed test
app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon")
})


app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>`)
})


//did not pass test yet

app.get( "/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params
    let bugCount = +numberOfBugs + 2
    let message
    console.log(numberOfBugs)
    if(+numberOfBugs >= 200) {
    message = "Too many bugs!! Start over!"
    } else {
    message = `<a href="/bugs/${bugCount}"> Pull one down, patch it around</a> ${numberOfBugs} little bugs in the code`
    }
    res.send(message)

})

app.get("/pokemon",(req,res) =>{ 
    res.send(pokemon)
})

// http://localhost:8888/pokemon/search?name=oddish
app.get("/pokemon/search",(req,res) =>{ 
   const nameInput = req.query.name.toLowerCase()
   const pokeData = pokemon.filter(poke => poke.name.toLowerCase() === nameInput)
   res.send(pokeData)
   
  });



app.get("/pokemon/:index",(req,res) =>{ 

    const { index } = req.params; //
    if (pokemon[index]) {
      res.send(pokemon[index]);
    } else {
      res.send(`Sorry, no pokemon found at ${index}`);
    }
  });

  app.get("/:verb/:adjective/:noun", (req, res) => {
    console.log(req.params);
    const { verb, adjective, noun } = req.params;
 res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
  });



module.exports = app