const db = require("../db/index");

function getItems(req, res, next) {
    db.getItemsAll(function (err, rows) {
        if (err) {
            res.send({
                success: false,
                items: null
            })
        } else {
            // directly return all rows
            res.send({
                success: true,
                items: rows
            });
        }
    });
}

function addItems(req, res, next) {
    // TODO
}

module.exports = {
    getItems,
    addItems
};