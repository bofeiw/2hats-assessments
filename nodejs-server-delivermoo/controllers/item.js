const db = require("../db/index");

function getItem(req, res, next) {
    db.getItem(req.params.id, function (err, row) {
        console.log(row);
        if (err) {
            res.send({
                success: false,
                message: err
            })
        } else if (row) {
            // found the item
            res.send({
                success: true,
                item: row
            })
        } else {
            // item not exist
            res.send({
                success: false,
                message: "Item could not be found"
            })
        }
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