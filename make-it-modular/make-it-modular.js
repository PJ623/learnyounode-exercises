// Exercise: "MAKE IT MODULAR"

var filter = require('./modular-filtered-ls.js');

filter(process.argv[2], process.argv[3], function (err, list) {
    if (err)
        throw err;

    for (let i = 0; i < list.length; i++)
        console.log(list[i]);
});