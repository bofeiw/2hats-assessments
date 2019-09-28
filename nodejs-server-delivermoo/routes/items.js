var express = require('express');
var itemsHandler = require('../controllers/items');
var router = express.Router();

/* GET all items */
router.get('/', itemsHandler.getItems);

/* POST to add items */
router.post('/', itemsHandler.addItems);

module.exports = router;
