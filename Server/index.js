const http = require('http');
const express = require('express');

const app = express(http);
direction = '';

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname });
})

app.get('/command', (req, res) => {
    res.send(direction);
    direction = ''
})

app.post('/command', (req, res) => {
    direction = req.body.direction;
    res.sendStatus(200);
})

app.listen(3000);