// Module for Exercise: "MAKE IT MODULAR"

var fs = require('fs');

module.exports = function filterLs(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) return callback(err);

        let re = new RegExp('.' + ext + '$');
        let filtered = [];

        for (let i = 0; i < list.length; i++) {
            if (re.test(list[i]))
                filtered.push(list[i]);
        }

        return callback(null, filtered);
    });
}