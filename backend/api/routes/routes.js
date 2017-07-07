module.exports = function(app) {
    var driver = require('../controllers/driverController'),
        review = require('../controllers/reviewController');

    app.route('/drivers')
        .get(driver.GetAllDrivers)
        .post(driver.CreateDriver);

    app.route('/drivers/:driverId')
        .get(driver.GetDriver);

    app.route('/drivers/:driverId/reviews')
        .get(review.GetDriverReviews)
        .post(review.CreateDriverReview);
    
    app.route('/drivers/:driverId/deliveries/:deliveryId/review')
        .get(review.GetDeliveryReviews)
        .post(review.CreateDeliveryReview);
}