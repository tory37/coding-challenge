var express = require('express'),
    path = require('path'),
    fs = require('fs'),
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

app.use(express.static(__dirname));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// app.use(function(req, res, next) {
//     var accept = req.accepts('html', 'json', 'xml');
//     if (accept !== 'html') {
//         return next();
//     }

//     var ext = path.extname(req.path);
//     if (ext !== '') {
//         return next();
//     }

//     fs.createReadStream(staticRoot + 'index.html').pipe(res);
// })



var routes = require('./api/routes/driverRoutes');
routes(app);

app.listen(port, function () {
    console.log('App running on port' + port);
});

console.log('todo list RESTful API server started on: ' + port);