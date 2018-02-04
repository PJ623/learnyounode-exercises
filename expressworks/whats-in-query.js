// Exercise 7 of 8: "WHAT'S IN QUERY"

var express = require('express');
var app = express();

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(process.argv[2]);