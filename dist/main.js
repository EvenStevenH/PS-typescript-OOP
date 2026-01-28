"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const productSorter_1 = require("./utils/productSorter");
// create instances and apply any discounts
let products = [];
products.push(new PhysicalProduct_1.PhysicalProduct("S123", "Computer", 200, 10));
products.push(new DigitalProduct_1.DigitalProduct("S456", "Windows OS", 120, 20000));
for (let product of products) {
    if ("applyDiscount" in product) {
        product.applyDiscount();
    }
}
// sort examples
let sortedByPrice = (0, productSorter_1.sortProducts)(products, "price");
let sortedByName = (0, productSorter_1.sortProducts)(products, "name");
console.log(sortedByPrice);
console.log(sortedByName);
// display product details and final prices
for (let product of products) {
    let taxedPrice = (0, taxCalculator_1.calculateTax)(product).toFixed(2);
    console.log(product.displayDetails() + ` | Final Price: $${taxedPrice}`);
}
