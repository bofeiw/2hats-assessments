const db = require("../db/index");
const TokenGenerator = require('uuid-token-generator');
const idGenerator = new TokenGenerator(256, TokenGenerator.BASE62);

/* handles request to get all orders */
function getOrdersAll(req, res, next) {
    db.getOrdersAll(function (err, rows) {
        if (err) {
            res.send({
                success: false,
                message: err
            })
        } else {
            // directly return all rows
            res.send({
                success: true,
                orders: rows
            });
        }
    });
}

/* handles request to make an order */
function makeOrder(req, res, next) {
    const itemId = req.body.itemId;
    const quantity = req.body.quantity;

    if (!(itemId && Number.isInteger(quantity))) {
        // data invalid
        res.send({
            success: false,
            message: "Invalid request"
        })
    } else {
        db.getItem(itemId, function (err, item) {
            if (err) {
                res.send({
                    success: false,
                    message: err
                })
            } else if (! item) {
                res.send({
                    success: false,
                    message: "Item could not be found"
                })
            } else if (item.stock < quantity) {
                // stock not enough
                res.send({
                    success: false,
                    message: "Item does not have enough stock"
                })
            } else {
                // create a new order
                const order = {
                    id: idGenerator.generate(),
                    itemId,
                    quantity
                };

                // update stock in database
                db.updateItemStock(itemId, item.stock - quantity);

                // add order to database
                db.addOrder(order);

                // return order
                res.send(order)
            }
        })
    }
}

module.exports = {
    getOrdersAll,
    makeOrder
};