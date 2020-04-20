const express = require('express');
const bodyParser = require('body-parser')
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(bodyParser.json({ extended: true }));

app.get('/hey', (req, res) => res.send("{test: 12}"))
app.post('/api/store', (req, res) => {
    console.log("Got new item", req.body)
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("COVID19");
          dbo.collection("SURVEY").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
    });
    res.sendStatus(200)
});

app.listen(8080)
console.log("Listening on port 8080")
