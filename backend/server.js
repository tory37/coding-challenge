var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 3000,

    keys = require('./keys'),

    mongoose = require('mongoose'),
    Driver = require('./api/models/driverModel'),
    DeliveryReview = require('./api/models/deliveryReviewModel'),
    DriverReview = require('./api/models/driverReviewModel'),

    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var mongoUrl = 'mongodb://tory:tor3-7h@ds147882.mlab.com:47882/waitrchallenge';
//var mongoUrl = 'mongodb://' + keys.mongoUser + ':' + keys.mongoPass + '@' + keys.mongoHost  + ':' + keys.mongoPort + '/' + keys.mongoDatabase;
console.log(mongoUrl);
mongoose.connect(mongoUrl);
//mongoose.connect('mongodb://localhost/Waitrchallengedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));


var routes = require('./api/routes/driverRoutes');
routes(app);

/**
 * Serves angular application
 */
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function () {
    console.log('App running on port' + port);
});

console.log('todo list RESTful API server started on: ' + port);