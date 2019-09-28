/*
* database queries handler
* */

/*
* interface Item {
  id: string;
  type: string;
  color: string;
  size: "S" | "M" | "L";
  stock: number;
}
* */

/*
* interface Order {
  id: string;
  itemId: string;
  quantity: number;
}
* */

let sqlite3 = require('sqlite3').verbose();

/* in memory sqlite3 database */
let db;

/* initialise database, create table Items and Orders, insert mock data */
function init() {
    db = new sqlite3.Database(':memory:');

    db.serialize(function () {
        // create datbles
        db.run('CREATE TABLE Items (' +
            'id TEXT PRIMARY KEY NOT NULL,' +
            'type TEXT NOT NULL,' +
            'color TEXT NOT NULL,' +
            'size TEXT NOT NULL,' +
            'stock INT NOT NULL' +
            ')');

        db.run('CREATE TABLE Orders (' +
            'id TEXT PRIMARY KEY NOT NULL,' +
            'itemId TEXT NOT NULL,' +
            'quantity INT NOT NULL' +
            ')');

        // insert mock data
        db.run("INSERT INTO Items VALUES ('id','type','color','S',3)");
        db.run("INSERT INTO Items VALUES ('id2','type','color','M',3)");
        db.run("INSERT INTO Items VALUES ('id3','type','color','L',3)");
        db.run("INSERT INTO Orders VALUES ('id','itemId',3)");
        db.run("INSERT INTO Orders VALUES ('id2','itemId2',5)");
    });
}

/*
* query item by id
* return item if found, otherwise return null
* */
function getItem(itemID) {
    db.get(`SELECT * FROM Items WHERE id = ${itemID}`, function (err, row) {
        if (err) {
            throw err
        } else if (row.length === 1) {
            // found the item
            return row
        } else {
            return null
        }
    });
}

/*
* query all items
* return a list of items
* */
async function getItemsAll() {
    await db.all(`SELECT * FROM Items`, function (err, rows) {
        console.log("selected")
        if (err) {
            throw err
        } else {
            // directly return all rows
            return rows
        }
    })
    console.log("returned")
}

/*
* query all orders
* return a list of orders
* */
function getOrdersAll() {
    db.all(`SELECT * FROM Orders`, function (err, rows) {
        if (err) {
            throw err
        } else {
            // directly return all rows
            return rows
        }
    })
}

/*
* query order by id
* return the order if exist, return null otherwise
* */
function getOrder(orderID) {
    db.get(`SELECT * FROM Orders WHERE id = ${orderID}`, function (err, row) {
        if (err) {
            throw err
        } else if (row.length === 1) {
            // found the order
            return row
        } else {
            throw "Order does not exists"
        }
    });
}

function addOrder(order) {
    return true
}

function addItem(items) {
    return true
}

function updateItemStock(itemID, stock) {
    return true
}

function deleteItem(itemID) {
    return true
}

module.exports = {
    getItem,
    getItemsAll,
    getOrdersAll,
    getOrder,
    addOrder,
    addItem,
    updateItemStock,
    deleteItem,
    init
};