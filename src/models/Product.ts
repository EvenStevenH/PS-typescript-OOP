export class Product {
	private _sku: string;
	public name: string;
	public price: number;

	constructor(sku: string, name: string, price: number) {
		this._sku = sku; // stock keeping unit
		this.name = name;
		this.price = price;
	}

	get extraProperty(): string {
		return ""; // default: nothing
	}

	displayDetails(): string {
		let extraProperty = this.extraProperty;
		return `Name: ${this.name} | Cost: $${this.price} | SKU: ${this._sku} | ${extraProperty}`;
	}

	getPriceWithTax(): number {
		return this.price * 1.05;
	}
}

// bulk discounts for physical products over a certain size
export interface DiscountableProduct {
	applyDiscount(): void;
}