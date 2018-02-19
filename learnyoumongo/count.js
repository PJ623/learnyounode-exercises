// Exercise 8 of 9: COUNT

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    db.db('learnyoumongo').collection('parrots').count(
        {
            age: { $gt: +process.argv[2] }
        }
        , (err, result) => {
            if (err) throw err;
            console.log(result);
            db.close();
        }
    );
});