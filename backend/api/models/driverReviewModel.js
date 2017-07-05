'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DriverReviewSchema = new Schema({
    rating: { type: Number, min: 1, max: 5 },
    description: String,
    driver_id: String 
});

module.exports = mongoose.model('DriverReviews', DriverReviewSchema);