const express = require('express')
const pokemon = require(`./models/pokemon.json`)

const app = express()

app.get("/", (req,res) => {
    res.send('Welcome 99 Pokemon')
 })  


app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
  });


  app.get("/bugs", (req, res) => {
    res.send(
        `<h1> 99 little bugs in the code </h1> 
        <a href='/bugs/101'> pull one down, patch it around<a>`
        );
  });

  app.get("/bugs/:numOfBugs", (req, res) => {
    const { numOfBugs} = req.params;
    let plus = +numOfBugs +2;
    //  console.log(plus)
    if (numOfBugs < 200)
    res.send(
      `${numOfBugs} little bugs in the code 
      <a href='*${plus}'>Pull one down, patch it around</a>
      `
    );
        else (numOfBugs >= 199) 
            res.send(`Too many bugs!! Start over!
            <a href='/bugs'>Start Over</a>`
            );

    });

    // console.log(pokemon[0])




 app.get("/pokemon", (req,res) => {
    res.send(pokemon)
 })   

 app.get("/pokemon/search", (req,res) => {
    const { name } = req.query;
    const caught = pokemon.filter(poke => 
    poke.name.toLowerCase() === name.toLowerCase()
    )
    
    // console.log(caught)
    res.send(caught)

 })  

 app.get("/pokemon/:indexOfArray", (req,res) => {
    const { indexOfArray } = req.params;
    if(pokemon[indexOfArray]){
        res.send(pokemon[indexOfArray])
    }else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
 })  


 
module.exports = app