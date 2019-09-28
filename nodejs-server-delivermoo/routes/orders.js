var express = require('express');
var ordersHandler = require('../controllers/orders');
var router = express.Router();

/* GET all orders */
router.get('/', ordersHandler.getOrdersAll);

/* POST to make a new order */
router.post('/', ordersHandler.makeOrder);

module.exports = router;
