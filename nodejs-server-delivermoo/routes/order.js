var express = require('express');
var orderHandler = require('../controllers/order');
var router = express.Router();

/* GET all orders */
router.get('/:id', orderHandler.getOrder);

module.exports = router;
