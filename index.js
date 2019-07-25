const http = require('http');
const express = require('express');
const ActionBuffer = require('./util/ActionBuffer');

const PORT = process.env.PORT || 3000
const MAX_BUFFER_SIZE = 3;

const app = express(http);
const buffer = new ActionBuffer(MAX_BUFFER_SIZE);

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
    res.send(buffer.pop());
})

app.get('/welcome', (req, res) => {
    res.sendFile("./views/welcome.html", { root: __dirname });
})

app.get('/logo', (req, res) => {
    res.sendFile("./static/logo.png", { root: __dirname });
})

app.post('/command', (req, res) => {
    buffer.push(req.body.direction);
    res.sendStatus(200);
});

app.post('/clear', (req, res) => {
    buffer.reset();
    res.sendStatus(200);
});

app.listen(PORT);