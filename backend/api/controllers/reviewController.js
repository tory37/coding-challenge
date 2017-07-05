'use strict'

var mongoose = require('mongoose'),
    DriverReview = mongoose.model('DriverReviews'),
    DeliveryReview = mongoose.model('DeliveryReviews');

exports.GetDriverReviews = function(req, res) {
    DriverReview.find({ driverId: req.params.driverId }, function(err, driverReviews) {
        if (err)
            res.send(404, "Error getting driver reviews: " + err);
        res.json(200, driverReviews);
    })
}

exports.GetDeliveryReviews = function(req, res) {
    DeliveryReview.find({ driverId: req.params.driverId }, function(err, deliveryReviews) {
        if (err)
            res.send(404, "Error getting delivery reviews: " + err);
        res.json(200, deliveryReviews);
    })
}

exports.CreateDriverReview = function(req, res) {
    console.log(req.body);
    Driver.find({}, function(err, drivers) {
        if (err)
            res.send(err);

        var new_driverReview = new DriverReview(
            {
                rating: req.body.rating,
                description: req.body.description,
                driver_id: req.params.driverId
            }
        );
        new_driver.save(function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    });
};

exports.CreateDeliveryReview = function(req, res) {
    console.log(req.body);
    Driver.find({}, function(err, drivers) {
        if (err)
            res.send(err);

        var new_deliveryReview = new DeliveryReview(
            {
                rating: req.body.rating,
                description: req.body.description,
                delivery_id: req.params.deliveryId,
                driver_id: req.params.driverId
            }
        );
        new_driver.save(function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    });
};