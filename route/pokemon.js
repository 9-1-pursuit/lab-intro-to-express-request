const express = require("express")
let router = express.Router()

const data = require("../models/pokemon.json")

router.get("/", (req, resp) => {
    resp.send(data)
})

router.get("/search", (req, resp) => {
    const input = req.query.name.toLowerCase()
    const thisPokemon = data.filter(({name}) => input === name.toLowerCase())
    const display = thisPokemon ? thisPokemon : `sorry we failed to 'Catch 'em All! `
    resp.send(display)
})

router.get("/:indexOfArray", (req, resp) => {
    const {indexOfArray} = req.params
    const thisPokemon = data[indexOfArray]
    const display = thisPokemon ? thisPokemon : `Sorry, no pokemon found at ${indexOfArray}`
    resp.send(display)

})
















module.exports = router