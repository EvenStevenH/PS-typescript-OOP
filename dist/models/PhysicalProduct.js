"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    _weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight;
    }
    get extraProperty() {
        return `Weight: ${this._weight} kg`;
    }
    applyDiscount() {
        if (this._weight > 8) {
            const discountRate = 0.12; // 12% bulk discount
            this.price = this.price - (this.price * discountRate);
        }
    }
    getPriceWithTax() {
        return this.price * 1.1; // 10% tax
    }
}
exports.PhysicalProduct = PhysicalProduct;
