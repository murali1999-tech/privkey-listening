require('dotenv').config()

var express = require('express');
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var request = require('request');

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/views/index.html');
  });

app.use(function(req, res, next) {
  if (!req.xhr) {
    res.status(500).send('Not AJAX');
  }
  else {
    next();
  }
});

app.post('/key', function (req, res) {
  console.log("test")
  res.json({
    privKey: process.env.PRIV_KEY,
  }) 
  
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });