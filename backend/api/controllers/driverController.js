'use strict'

var mongoose = require('mongoose'),
    Driver = mongoose.model('Drivers');

exports.GetAllDrivers = function(req, res) {
    Driver.find({}, function(err, drivers) {
        if (err)
            res.send(404, "Error getting drivers: " + err);
        res.json(200, drivers);
    })
}

exports.CreateDriver = function(req, res) {
    console.log(req.body);
    var new_driver = new Driver(req.body);
    new_driver.save(function(err, task) {
        if (err)
            res.send(400, err);
        res.json(task);
    });
};

exports.GetDriver = function(req, res) {
    console.log("Driver Id: " + req.params.driverId);
    Driver.findOne({ _id: req.params.driverId }, function(err, driver) {
        if (err)
            res.send(404, "Error getting driver: " + err);
        res.json(200, driver);
    });
};

// exports.GetDriverReviews = function(req, res) {
//     Driver.
// }