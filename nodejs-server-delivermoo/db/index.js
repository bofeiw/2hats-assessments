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

/*
* query item by id
* return item if found, otherwise return null
* */
function getItem(itemID) {
    return {
        //TODO
        id: "string",
        type: "string",
        color: "string",
        size: "S",
        stock: "number",
    }
}

/*
* query all items
* return a list of items
* */
function getItemsAll() {
    return [{
        //TODO
        id: "string",
        type: "string",
        color: "string",
        size: "S",
        stock: "number",
    }]
}

function getOrdersAll() {
    return []
}

function getOrder(orderID) {
    return {}
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
    deleteItem
};