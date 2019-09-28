const dbQuery = require("../db/index");

function getOrdersAll(req, res, next) {
    const allOrders = dbQuery.getOrdersAll();
    res.send({
        success: true,
        // TODO
        orders: allOrders
    });
}

function makeOrder(req, res, next) {
    // TODO
}

module.exports = {
    getOrdersAll,
    makeOrder
};