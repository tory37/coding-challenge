'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DriverReviewSchema = new Schema({
    rating: { type: Number, min: 1, max: 5, required: true },
    description: { type: String, required: true },
    driver_id: {type: String, required: true } 
});

module.exports = mongoose.model('DriverReviews', DriverReviewSchema);