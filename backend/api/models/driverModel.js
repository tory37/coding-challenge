'use strict'
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DriverSchema = new Schema({
    id: String,
    name: String,
    location: {
        latitude: Number,
        longitude: Number
    }
});

module.exports = mongoose.model('Drivers', DriverSchema);