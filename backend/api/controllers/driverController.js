'use strict'

var mongoose = require('mongoose'),
    Driver = mongoose.model('Drivers');

/**
 * description: Finds and returns all drivers.
 * returns: 
 *  success: list of drivers
 *  error: 404
 */
exports.GetAllDrivers = function(req, res) {
    Driver.find({}, function(err, drivers) {
        if (err)
            res.send(404, "Error getting drivers: " + err);
        res.json(200, drivers);
    })
}

/**
 * description: Creates a driver from the data passed in the body
 * returns: 
 *  success: Create driver
 *  error: 400
 */
exports.CreateDriver = function(req, res) {
    console.log(req.body);
    var new_driver = new Driver(req.body);
    new_driver.save(function(err, task) {
        if (err)
            res.send(400, err);
        res.json(task);
    });
};

/**
 * description: Gets the driver with the driverId from the url params
 * returns: 
 *  success: driver with matching driverId
 *  error: 404
 */
exports.GetDriver = function(req, res) {
    console.log("Driver Id: " + req.params.driverId);
    Driver.findOne({ _id: req.params.driverId }, function(err, driver) {
        if (err)
            res.send(404, "Error getting driver: " + err);
        res.json(200, driver);
    });
};