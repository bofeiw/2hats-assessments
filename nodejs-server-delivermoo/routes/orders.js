var express = require('express');
var ordersHandler = require('../controllers/orders');
var router = express.Router();

/* GET all items */
router.get('/', ordersHandler.getOrdersAll);
router.post('/', ordersHandler.makeOrder);

module.exports = router;
