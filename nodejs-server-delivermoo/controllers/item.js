const dbQuery = require("../db/index");

function getItem(req, res, next) {
    const item = dbQuery.getItem(req.params.id);
    res.send({
        success: true,
        // TODO
        item
    });
}

function patchStock(req, res, next) {
    // TODO
}

function deleteItem(req, res, next) {
    // TODO
}

module.exports = {
    getItem,
    patchStock,
    deleteItem
};