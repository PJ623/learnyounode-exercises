// Exercise 3 of 9: FIND

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

var age = process.argv[2];

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var parrots = db.db('learnyoumongo');
    
    parrots.collection('parrots').find({
        age: { $gt: +age }
    }).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});