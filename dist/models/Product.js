"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _sku;
    name;
    price;
    constructor(sku, name, price) {
        this._sku = sku; // stock keeping unit
        this.name = name;
        this.price = price;
    }
    get extraProperty() {
        return ""; // default: nothing
    }
    displayDetails() {
        let extraProperty = this.extraProperty;
        return `Name: ${this.name} | Cost: $${this.price} | SKU: ${this._sku} | ${extraProperty}`;
    }
    getPriceWithTax() {
        return this.price * 1.05;
    }
}
exports.Product = Product;
