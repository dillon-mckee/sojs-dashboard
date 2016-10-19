var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var frameworkData = require('./models/frameworkData').frameworkData

///TODO: Add Mongo backend with survey data

app.use(bodyParser.json());
app.use('/', express.static('build'));

app.get('/frameworks', function(req, res) {
    res.json(frameworkData);

});

app.get('/frameworks/angular2', function(req, res) {
    res.json(frameworkData[0]);

});

app.get('/frameworks/react', function(req, res) {
    res.json(frameworkData[1]);

});

app.get('/frameworks/ember', function(req, res) {
    res.json(frameworkData[2]);
});

app.get('/frameworks/angular', function(req, res) {
    res.json(frameworkData[3]);

});

app.listen(3000, function () {
  console.log('Listening at 3000!');
});
