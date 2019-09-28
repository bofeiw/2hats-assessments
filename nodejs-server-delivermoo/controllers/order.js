const db = require("../db/index");

function getOrder(req, res, next) {
    db.getOrder(req.params.id, function (err, row) {
        if (err) {
            res.send({
                success: false,
                message: err
            });
        } else if (row) {
            // found the order
            res.send({
                success: true,
                order: row
            });
        } else {
            // order not exist
            res.send({
                success: false,
                message: "Order could not be found"
            });
        }
    });
}

module.exports = {
    getOrder
};