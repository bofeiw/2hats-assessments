var express = require('express');
var orderHandler = require('../controllers/order');
var router = express.Router();

/* GET all items */
router.get('/:id', orderHandler.getOrder);

module.exports = router;
