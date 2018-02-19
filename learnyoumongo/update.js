// Exercise 6 of 9: UPDATE

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    var docs = db.db(process.argv[2]);

    var doc = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    }

    docs.collection('users').update(
        {
            username: "tinatime"
        }
        , {
            $set: {
                age: 40
            }
        }
        , (err, data) => {
            if (err) throw err;
            db.close();
        }
    );
});