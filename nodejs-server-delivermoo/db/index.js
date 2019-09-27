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

module.exports = {
    getItem,
    getItemsAll
};