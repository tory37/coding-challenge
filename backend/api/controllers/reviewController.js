'use strict'

var mongoose = require('mongoose'),
    Driver = mongoose.model('Drivers'),
    DriverReview = mongoose.model('DriverReviews'),
    DeliveryReview = mongoose.model('DeliveryReviews');

/**
 * description: Gets a list of reviews of the driver with driverId from params
 * returns: 
 *  success: list of reviews for driver
 *  error: 404
 */
exports.GetDriverReviews = function(req, res) {
    DriverReview.find({ driver_id: req.params.driverId }, function(err, driverReviews) {
        if (err)
            res.send(404, "Error getting driver reviews: " + err);
        res.json(200, driverReviews);
    })
}

/**
 * description: Gets a list of reviews of the driver with driverId from params
 * returns: 
 *  success: list of reviews for driver
 *  error: 404
 */
exports.GetDeliveryReviews = function(req, res) {
    DeliveryReview.find({ driver_id: req.params.driverId, delivery_id: req.params.deliveryId }, function(err, deliveryReviews) {
        if (err)
            res.send(404, "Error getting delivery reviews: " + err);
        res.json(200, deliveryReviews);
    })
}

/**
 * description: Creates a review for a driver if it exists
 * returns: 
 *  success: the created review
 *  error: 404 if error finding driver, 400 if error creating review
 */
exports.CreateDriverReview = function(req, res) {
    try {
        Driver.find({ _id: req.params.driverId }, function(err, drivers) {
            if (err) {
                res.send(404, err);
                return;
            }

            if (drivers.length == 0) {
                res.send(404, "Driver " + req.params.driverId + " not found.");
                return; 
            }

            var new_driverReview = new DriverReview(
                {
                    rating: req.body.rating,
                    description: req.body.description,
                    driver_id: req.params.driverId
                }
            );
            new_driverReview.save(function(err, task) {
                if (err)
                    res.send(400, err);
                res.json(task);
            });
        });
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};

/**
 * description: Creates a review for a delivery, with a reference to a driver if it exists
 * returns: 
 *  success: the created review
 *  error: 404 if error finding driver, 400 if error creating review
 */
exports.CreateDeliveryReview = function(req, res) {
    try {
        Driver.find({ _id: req.params.driverId }, function(err, drivers) {
            if (err) {
                res.send(404, err);
                return;
            }

            if (drivers.length == 0) {
                res.send(404, "Driver " + req.params.driverId + " not found.");
                return;
            }

            var new_deliveryReview = new DeliveryReview(
                {
                    rating: req.body.rating,
                    description: req.body.description,
                    delivery_id: req.params.deliveryId,
                    driver_id: req.params.driverId
                }
            );
            new_deliveryReview.save(function(err, task) {
                if (err)
                    res.send(400, err);
                res.json(task);
            });
        });
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};