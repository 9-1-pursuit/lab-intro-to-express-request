const express = require("express")
let router = express.Router()
const data = require("../models/pokemon.json")
const filePath = __dirname.split("/").slice(0,7).join("/")
const cors = require("cors")
// res.sendFile(path [, options] [, fn])

// bonus I used this in react app to fetch and recieve the poke data
router.get("/", cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }) ,(req, resp) => {
    // resp.sendFile(filePath+'/public/prettyHome.html') 
    resp.json(data)
})

// Bonus send an unordered list of anchor tags that link to the array position of the pokemon
router.get("/all", (req, resp) => {
    let display = ""
    data.forEach((obj, i) => 
       display += `<a href=${i}>${obj.name}</a><br>`
    )
    resp.send(display)
})

// bonus add the search query 'type' i.e : http://localhost:8888/pokemon-pretty/search?type=grass
router.get("/search", (req, resp) => {
    const input = req.query.type.toLowerCase()
    const thesePokemon = []
    data.forEach(obj => {
        obj.type.forEach(el => {
            if(el.toLowerCase() === input){
                thesePokemon.push(obj)
            }
        } )
    }      
    )
    const display = thesePokemon ? thesePokemon : `sorry we failed to 'Catch 'em All! `
    
    resp.send(display)
})

// Bonus display name image and info
router.get("/:indexOfArray", (req, resp) => {
    const {indexOfArray} = req.params
    const thisPokemon = data[indexOfArray] 
    const pokeName = thisPokemon.name
    const pokeImage = `<img src = ${thisPokemon.img} alt = ${pokeName}/>`
    const pokeInfo = thisPokemon.misc.classification
    const display = `
    <h1>${pokeName}</h1>
    <br>
    ${pokeImage}
    <br>
    ${pokeInfo}`
    
    resp.send(display)
})

module.exports = router