"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    _fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }
    get extraProperty() {
        return `File Size: ${this._fileSize} MB`;
    }
    getPriceWithTax() {
        return this.price; // no tax
    }
}
exports.DigitalProduct = DigitalProduct;
