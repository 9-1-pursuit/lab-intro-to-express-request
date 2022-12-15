const express = require("express")
let router = express.Router()

const data = require("../models/pokemon.json")

router.get("/", (req, resp) => {
    const list = data.map(({name}) => name)
    resp.send(list)
})

router.get("/search", (req, resp) => {
    const input = req.query.name.toLowerCase()
    const thisPokemon = data.find(({name}) => input === name.toLowerCase())
    const display = thisPokemon ? thisPokemon : `sorry we failed to 'Catch 'em All! `
    resp.send(display)
})

router.get("/:indexOfArray", (req, resp) => {
    const {indexOfArray} = req.params
    const thisPokemon = data[indexOfArray]
    const display = thisPokemon ? thisPokemon : `sorry, no pokemon found at /pokemon/${indexOfArray}`
    resp.send(display)

})
















module.exports = router