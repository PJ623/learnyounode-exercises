// Exercise 3 of 8: "PUG"

var express = require('express');
var app = express();

app.set('views', process.argv[3] || path.join(__dirname, 'templates'));

app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);