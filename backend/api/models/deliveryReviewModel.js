'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DeliveryReviewSchema = new Schema({
    rating: { type: Number, min: 1, max: 5 },
    description: String,
    delivery_id: String,
    driver_id: String 
});

module.exports = mongoose.model('DeliveryReviews', DeliveryReviewSchema);