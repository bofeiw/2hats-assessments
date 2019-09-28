const dbQuery = require("../db/index");

function getItems(req, res, next) {
    try {
        const allItems = dbQuery.getItemsAll();
        console.log(allItems)
        res.send({
            success: true,
            // TODO
            items: allItems
        });
    } catch (e) {
        res.send({
            success: false,
            items: null
        })
    }
}

function addItems(req, res, next) {
    // TODO
}

module.exports = {
    getItems,
    addItems
};