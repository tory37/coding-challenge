var expect = require('chai').expect;

// Models
var Driver = require('./api/models/driverModel');

describe('driver', function () {
    it('should be invalid if name is empty', function (done) {
        var d = new Driver();

        d.validate(function (err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});

var DriverReview = require('./api/models/driverReviewModel');

describe('driverReview', function () {
    it('should be invalid if rating, description, or driver_id is empty', function (done) {
        var d = new DriverReview();

        d.validate(function (err) {
            expect(err.errors.rating).to.exist;
            expect(err.errors.description).to.exist;
            expect(err.errors.driver_id).to.exist;
            done();
        });
    });
});

var DeliveryReview = require('./api/models/deliveryReviewModel');

describe('deliveryReview', function () {
    it('should be invalid if rating, description, review_id or driver_id is empty', function (done) {
        var d = new DeliveryReview();

        d.validate(function (err) {
            expect(err.errors.rating).to.exist;
            expect(err.errors.description).to.exist;
            expect(err.errors.driver_id).to.exist;
            expect(err.errors.delivery_id).to.exist;
            done();
        });
    });
});

// // Routes
// var sinon = require('sinon'),
//     should = require('should'),
//     request = require('supertest'),
//     server = require('./server'),
//     mongoose = require('mongoose');

// require('sinon');
// require('sinon-mongoose');

// describe('controllers', function () {

//     beforeEach(mongoose.connection.close());
//     afterEach(mongoose.connection.close());

//     describe('GetAllDrivers', function() {
//         it('Should return drivers from mongooseModel.find', function(done) {
//             var a = {
//                 driver_id: '1234',
//                 name: "Person",
//                 location: {
//                     latitude: 1.3,
//                     longitude: 1.2
//                 }
//             };
//             var b = {
//                 driver_id: '12345',
//                 name: "Person2",
//                 location: {
//                     latitude: 1.4,
//                     longitude: 1.3
//                 }
//             };
//             var expectedModels = [a, b];

//             sinon.mock(Driver)
//                 .expects('find')
//                 .resolves(expectedModels);

//             request(server)
//                 .get('/drivers')
//                 .send()
//                 .expect(200)
//                 .expect('Content-Type', /json/)
//                 .end(function(err, res) {
//                     expect(res.body).to.equal(expectedModels);
//                 });
//         });
//     })
// })