const dbQuery = require("../db/index");

function getItems(req, res, next) {
    const allItems = dbQuery.getItemsAll();
    res.send({
        success: true,
        // TODO
        items: allItems
    });
}

function addItems(req, res, next) {
    // TODO
}

module.exports = {
    getItems,
    addItems
};