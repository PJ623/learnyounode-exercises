// Exercise 2 of 8: "STATIC"

var express = require('express');
var app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);