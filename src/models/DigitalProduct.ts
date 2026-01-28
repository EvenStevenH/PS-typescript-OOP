import { Product } from "./Product";

export class DigitalProduct extends Product {
	private _fileSize: number;

	constructor(sku: string, name: string, price: number, fileSize: number) {
		super(sku, name, price);
		this._fileSize = fileSize;
	}

	get extraProperty(): string {
		return `File Size: ${this._fileSize} MB`;
	}

	getPriceWithTax(): number {
		return this.price; // no tax
	}
}
