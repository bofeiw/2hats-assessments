function validateItem(item) {
    return typeof item.type === "string" &&
        typeof item.color === "string" &&
        typeof item.size === "string" &&
        (item.size === "S" || item.size === "M" || item.size === "L") &&
        typeof item.stock === "number";
}

function validateItems(items) {
    for (const item of items) {
        if (! validateItem(item)) {
            return false;
        }
    }
    return true;
}

module.exports = {
    validateItem,
    validateItems
}