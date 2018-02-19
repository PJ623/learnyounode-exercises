// Exercise 7 of 9: REMOVE

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    db.db(process.argv[2]).collection(process.argv[3]).remove(
        {
            _id: process.argv[4]
        }
        , (err, data) => {
            if (err) throw err;
            db.close();
        }
    );
});