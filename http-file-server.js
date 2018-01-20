// Exercise: "HTTP FILE SERVER"

var http = require('http');
var fs = require('fs');

var httpServer = http.createServer((req, res) => {
    let rStream = fs.createReadStream(process.argv[3]);
    let result = '';
    rStream.on('data', (chunk) => {
        result += chunk.toString();
    }).on('end', () => {
        res.end(result);
    });
});

httpServer.listen(process.argv[2]);