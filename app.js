const express = require('express');
const morgan = require('morgan');
const pokemon = require('./models/pokemon.json');
const app = express();

app.use(morgan('tiny'));

app.get('/', (reg, res) => {
    res.send('Welcome 99 Pokemon');
});

app.get('/:verb/:adjective/:noun', (req,res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});

app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code
    99 little bugs
    <a href=/bugs/101'>pull one down, patch it around</a>`)
})

app.get('/bugs/:numberOfBugs', (req, res) => {
    const {numberOfBugs} = req.params
    if (numberOfBugs >= 200)
        res.send('Too many bugs!! Start over!')
    else
        res.send(`<a href='/bugs/${+numberOfBugs + 2}'>Pull one down, patch it around</a>${numberOfBugs} little bugs in the code`)    
});


// Pokemon
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
});

app.get('/pokemon/search', (req, res) => {
    const {name} = req.query;    
    pokemon.forEach((pokemon) => {
        if (name.toLowerCase() === pokemon.name.toLowerCase())
            res.send([pokemon]);
        else
            res.send([]);    
    });
});

app.get('/pokemon/:index', (req, res) => {
    const {index} = req.params;
    if (pokemon[index])
        res.send(pokemon[req.params.index])
    else
        res.send(`Sorry, no pokemon found at ${[index]}`)    
})

module.exports = app