//Node
const express = require("express")
const app = express()

//Routes
app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code`)
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

//Export
module.exports = app