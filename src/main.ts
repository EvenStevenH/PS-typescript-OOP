import { Product } from "./models/Product";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";
import { sortProducts } from "./utils/productSorter";

// create instances and apply any discounts
let products: Product[] = [];
products.push(new PhysicalProduct("S123", "Computer", 200, 10));
products.push(new DigitalProduct("S456", "Windows OS", 120, 20000));
for (let product of products) {
	if ("applyDiscount" in product) {
		(product as any).applyDiscount();
	}
}

// sort examples
let sortedByPrice = sortProducts(products, "price");
let sortedByName = sortProducts(products, "name");
console.log(sortedByPrice);
console.log(sortedByName);

// display product details and final prices
for (let product of products) {
	let taxedPrice = calculateTax(product).toFixed(2);
	console.log(product.displayDetails() + ` | Final Price: $${taxedPrice}`);
}
