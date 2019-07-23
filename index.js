const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 3000

const app = express(http);
direction = '';

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
})

app.get('/static/bundle.js', (req, res) => {
    res.sendFile("./static/bundle.js", { root: __dirname });
})

app.get('/static/style.css', (req, res) => {
    res.sendFile('./views/styles/style.css', { root: __dirname });
})

app.get('/command', (req, res) => {
    res.send(direction);
    direction = ''
})

app.post('/command', (req, res) => {
    direction = req.body.direction;
    res.sendStatus(200);
})

app.listen(PORT);