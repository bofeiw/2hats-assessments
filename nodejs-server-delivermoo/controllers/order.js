const dbQuery = require("../db/index");

function getOrder(req, res, next) {
    const order = dbQuery.getOrder(req.params.id);
    res.send({
        success: true,
        // TODO
        order
    });
}

module.exports = {
    getOrder
};