const dbQuery = require("../db/index");

function itemsHandler(req, res, next) {
    const allItems = dbQuery.getItemsAll();
    res.send({
        success: true,
        // TODO
        items: allItems
    });
}

module.exports = {
    itemsHandler
};