const http = require('http');
const express = require('express');

const app = express(http);

app.get('/', (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname });
})

app.listen(3000);