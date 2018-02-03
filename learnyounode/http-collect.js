// Exercise: "HTTP COLLECT"

var http = require('http');
let result = '';

http.get(process.argv[2], (res) => {
    res.on('data', (data) => {
        result += data.toString();
    });
    res.on('error', (err) => {
        console.log(err);
    });
    res.on('end', () => {
        console.log(result.length);
        console.log(result);
    });

}).on('err', (err) => { console.log(err); });
