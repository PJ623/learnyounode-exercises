// Exercise: "HTTP UPPERCASERER"

var http = require('http');

var httpServer = http.createServer((req, res) => {

    if (req.method == 'POST') {
        let result = '';

        req.on('data', (chunk) => {
            result += chunk;
        }).on('end', () => {
            res.end(result.toUpperCase());
        });
    }
});

httpServer.listen(process.argv[2]);