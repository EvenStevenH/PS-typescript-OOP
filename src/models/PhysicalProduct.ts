import { Product, DiscountableProduct } from "./Product";

export class PhysicalProduct extends Product implements DiscountableProduct {
	private _weight: number;

	constructor(sku: string, name: string, price: number, weight: number) {
		super(sku, name, price);
		this._weight = weight;
	}

	get extraProperty(): string {
		return `Weight: ${this._weight} kg`;
	}

	applyDiscount(): void {
		if (this._weight > 8) {
			const discountRate = 0.12; // 12% bulk discount
			this.price = this.price - (this.price * discountRate);
		}
	}

	getPriceWithTax(): number {
		return this.price * 1.1; // 10% tax
	}
}
