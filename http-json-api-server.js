// Exercise: "HTTP JSON API SERVER"

var http = require('http');

var httpServer = http.createServer((req, res) => {

    if (req.method == 'GET') {
        let body = {};

        if (req.url.match('/api/parsetime')) {
            let d = new Date(req.url.match(/=(.*)/)[1].toString());

            body.hour = d.getHours();
            body.minute = d.getMinutes();
            body.second = d.getSeconds();

        } else if (req.url.match('/api/unixtime')) {
            let d = new Date(req.url.match(/=(.*)/)[1].toString());
            body.unixtime = d.getTime();
        }

        res.end(JSON.stringify(body));
        
    } else {
        res.end();
    }
});

httpServer.listen(process.argv[2]);