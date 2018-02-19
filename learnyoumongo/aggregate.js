// Exercise 9 of 9: AGGREGATE

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    db.db('learnyoumongo').collection('prices')
        .aggregate([
            {
                $match: {
                    size: process.argv[2]
                }
            }
            , {
                $group: {
                    _id: 'average',
                    average: {
                        $avg: '$price'
                    }
                }
            }
        ])
        .toArray((err, result) => {
            if (err) throw err;
            console.log(Number(result[0].average).toFixed(2));
            db.close();
        });
});