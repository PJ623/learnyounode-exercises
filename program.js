// Exercise: "MY FIRST ASYNC I/O!"

var fs = require('fs');

fs.readFile(process.argv[2], (err, fileContents) => {console.log(fileContents.toString().split('\n').length-1);});
