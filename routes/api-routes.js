// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import point controller
//var userpointcontroller = require('../controllers/userpointcontroller');
//// Contact routes
//router.route('/points').get(userpointcontroller.index).post(userpointcontroller.new);
//router.route('/points/near').get(userpointcontroller.near);
//router.route('/points/mobile/:mobile').get(userpointcontroller.getlocation);
//router.route('/points/delete/:mobile').delete(userpointcontroller.deletelocations);

//router.route('/points/docid/:userdocumentid').get(userpointcontroller.getalllocation);
//router.route('/points/last/').get(userpointcontroller.getlastlocation);
//router.route('/points/docid/:userdocumentid/startdate/:startdate/enddate/:enddate').get(userpointcontroller.getalllocationWithDateRange);

//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

var bitbnscontroller = require('../controllers/bitbnscontroller');

router.route('/placeMarketOrderQuantity').post(bitbnscontroller.placeMarketOrderQuantity);
// Export API routes
module.exports = router;