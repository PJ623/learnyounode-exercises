// Exercise 8 of 8: "JSON ME"

var express = require('express');
var app = express();

var fs = require('fs');

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], (err, data) => {
        let obj = JSON.parse(data);
        res.send(obj);
    });
});

app.listen(process.argv[2]);