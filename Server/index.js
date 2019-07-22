const http = require('http');
const express = require('express');

const app = express(http);

app.get('/', (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname });
})

app.get('/command', (req, res) => {
    res.sendStatus(200);
})

app.post('/command', (req, res) => {
    res.sendStatus(200);
})

app.listen(3000);