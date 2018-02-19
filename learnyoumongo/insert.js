// Exercise 5 of 9: INSERT

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    var docs = db.db('learnyoumongo');

    var doc = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    }

    docs.collection('docs').insert(doc,
        (err, data) => {
            if (err) throw err;
            console.log(JSON.stringify(doc));
            db.close();
        }
    );
});