var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,

    mongoose = require('mongoose'),
    Driver = require('./api/models/driverModel'),
    DeliveryReview = require('./api/models/deliveryReviewModel'),
    DriverReview = require('./api/models/driverReviewModel'),

    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Waitrchallengedb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/driverRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);