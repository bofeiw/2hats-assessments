var express = require('express');
var itemHandler = require('../controllers/item');
var router = express.Router();

/* GET users listing. */
router.get('/:id', itemHandler.getItem);
router.patch('/:id', itemHandler.patchStock);
router.delete('/:id', itemHandler.deleteItem);

module.exports = router;
