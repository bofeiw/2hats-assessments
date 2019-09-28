const db = require("../db/index");
const auth = require("./auth");
const validate = require("../util/item");
const TokenGenerator = require('uuid-token-generator');
const idGenerator = new TokenGenerator(256, TokenGenerator.BASE62);


/*
* handles request to get all items
* */
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

/*
* admin operation to add an item
* */
function addItems(req, res, next) {
    if (! auth(req.token)) {
        // user is not admin
        res.send({
            success: false,
            message: "Unauthorized"
        })
    } else {
        const items = req.body.items;
        if (! validate.validateItems(items)) {
            // items not valid
            res.send({
                success: false,
                message: "Invalid request"
            });
            return;
        }

        // add items
        const itemIds = [];

        // list of ids that are in process of query
        let pendingIds = items.length;
        itemIds.length = items.length;
        for (let i = 0; i < items.length; ++i) {
            const item = items[i];
            db.itemExists(item, function (err, returnedItem) {
                if (err) {
                    console.log(err);
                } else if (returnedItem) {
                    // item exists, add stock
                    itemIds[i] = returnedItem.id;
                    db.updateItemStock(returnedItem.id, item.stock + returnedItem.stock);
                } else {
                    // item not exists, add to database
                    item.id = idGenerator.generate();
                    itemIds[i] = item.id;
                    db.addItem(item);
                }

                // wait until all db queries are finished
                pendingIds--;
                if (pendingIds <= 0) {
                    res.send({
                        success: true,
                        itemIds
                    });
                }
            })
        }
    }
}

module.exports = {
    getItems,
    addItems
};