var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    success: true,
    // TODO
    item: {

    }
  });
});

module.exports = router;
