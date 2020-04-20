const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const https = require('https')
const fs = require('fs');
const path = require('path');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.use(bodyParser.json({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')))

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

app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

https.createServer({
	key: fs.readFileSync('/etc/letsencrypt/live/project-nightingale.org/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/project-nightingale.org/fullchain.pem')
}, app).listen(443)

console.log("Listening on port 443")
