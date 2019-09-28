const db = require("../db/index");
const auth = require("./auth");

/*
* handles requests to get item by id
* */
function getItem(req, res, next) {
    db.getItem(req.params.id, function (err, row) {
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

/*
* handles request to update quantity by id
* */
function patchStock(req, res, next) {
    if (! auth(req.token)) {
        // user is not admin
        res.send({
            success: false,
            message: "Unauthorized"
        })
    } else {
        const itemId = req.params.id;
        const stock = req.body.stock;
        db.getItem(itemId, function (err, item) {
            if (err) {
                res.send({
                    success: false,
                    message: err
                })
            } else if (item) {
                // found item, update quantity
                db.updateItemStock(itemId, item.stock + stock);
                res.send({
                    success: true,
                });
            } else {
                // item not exists
                res.send({
                    success: false,
                    message: "Item could not be found"
                })
            }
        })
    }
}

/*
* handles requests to delete item by id
* */
function deleteItem(req, res, next) {
    if (! auth(req.token)) {
        // user is not admin
        res.send({
            success: false,
            message: "Unauthorized"
        })
    } else {
        const itemId = req.params.id;
        db.getItem(itemId, function (err, item) {
            if (err) {
                res.send({
                    success: false,
                    message: err
                })
            } else if (item) {
                // found item, delete it
                db.deleteItem(itemId);
                res.send({
                    success: true,
                });
            } else {
                // item not exists
                res.send({
                    success: false,
                    message: "Item could not be found"
                })
            }
        })
    }
}

module.exports = {
    getItem,
    patchStock,
    deleteItem
};