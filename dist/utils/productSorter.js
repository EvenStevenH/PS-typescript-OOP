"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortProducts = sortProducts;
function sortProducts(products, type) {
    let sortedArray = [...products];
    if (type === "price") {
        return sortedArray.sort((a, b) => a.price - b.price);
    }
    if (type === "name") {
        return sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sortedArray;
}
