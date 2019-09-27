var express = require('express');
var itemsHandler = require('../controllers/items');
var router = express.Router();

/* GET all items */
router.get('/', itemsHandler.itemsHandler);

module.exports = router;
