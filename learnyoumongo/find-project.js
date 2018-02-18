// Exercise 4 of 9: FIND PROJECT

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

var age = process.argv[2];

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var parrots = db.db('learnyoumongo');

    parrots.collection('parrots')
        .find({
            age: { $gt: +age },
        })
        .project({
            _id: 0,
            name: 1,
            age: 1
        })
        .toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        });
});