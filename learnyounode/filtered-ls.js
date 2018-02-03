// Exercise: "FILTERED LS"

var fs = require('fs');

fs.readdir(process.argv[2], (err, list) => {
    let re = new RegExp('.' + process.argv[3] + '$');

    for(let i = 0; i < list.length; i++){
        if(re.test(list[i]))
            console.log(list[i]);
    }
});