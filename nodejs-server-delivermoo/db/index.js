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

/*
* query item by id
* */
function getItem(itemID, callback) {
    db.get(`SELECT * FROM Items WHERE id = '${itemID}'`, callback);
}

/*
* query all items
* */
function getItemsAll(callback) {
    db.all(`SELECT * FROM Items`, callback);
}

/*
* query all orders
* */
function getOrdersAll(callback) {
    db.all(`SELECT * FROM Orders`, callback)
}

/*
* query order by id
* */
function getOrder(orderID, callback) {
    db.get(`SELECT * FROM Orders WHERE id = '${orderID}'`, callback);
}

/*
* add order to database
* */
function addOrder(order) {
    db.run(`INSERT INTO Orders VALUES ('${order.id}','${order.itemId}',${order.quantity})`)
}

/*
* add item to database
* */
function addItem(item) {
    db.run(`INSERT INTO Items VALUES ('${item.id}','${item.type}','${item.color}','${item.size}',${item.stock})`)
}

/*
* update item stock by id
* */
function updateItemStock(itemID, stock) {
    db.run(`UPDATE Items SET stock = ${stock} WHERE id = '${itemID}'`)
}

/*
* delete item by id
* */
function deleteItem(itemID) {
    db.run(`DELETE FROM Items WHERE id = '${itemID}'`);
}

/*
* compares type, color and size of an item,
* if exists such an item, callback will see the item
* */
function itemExists(item, callback) {
    db.get(`SELECT * FROM Items WHERE type = '${item.type}' AND color = '${item.color}' AND size = '${item.size}'`, callback);
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
    itemExists,
};