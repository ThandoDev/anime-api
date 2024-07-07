const express = require('express');
const app = express();
const animeQuotes = require('./anime-quotes.json');

app.get('/random-anime-quote', (req, res) => {
const randomIndex = Math.floor(Math.random() * animeQuotes.length);
const randomAnimeQuote = animeQuotes[randomIndex];
res.json(randomAnimeQuote);
});

app.listen(5000, () => {
    console.log('Server is ready now on port 5000')
});