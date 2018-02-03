// Exercise: "JUGGLING ASYNC"

var http = require('http');
let result = '';
let callbackCount = 0;
let arr = [];

function getData(i) {
    http.get(process.argv[i + 2], (res) => {
        let done = false;
        callbackCount++;
        res.on('data', (data) => {
            result += data.toString();
        }).on('error', (err) => {
            console.log(err);
        }).on('end', () => {
            arr[i] = result;
            result = "";
            done = true;
            if (callbackCount == 3) {
                printResults();
            }
        });
    });
}

function printResults() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

for (let i = 0; i < 3; i++) {
    getData(i);
}
