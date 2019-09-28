var express = require('express');
var itemHandler = require('../controllers/item');
var router = express.Router();

/* GET item by id */
router.get('/:id', itemHandler.getItem);

/* update stock by id */
router.patch('/:id', itemHandler.patchStock);

/* delete item by id */
router.delete('/:id', itemHandler.deleteItem);

module.exports = router;
