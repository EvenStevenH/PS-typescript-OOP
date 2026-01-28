import { Product } from "../models/Product";

export type SortType = "price" | "name";

export function sortProducts(products: Product[], type: SortType): Product[] {
	let sortedArray = [...products];

	if (type === "price") {
		return sortedArray.sort((a, b) => a.price - b.price);
	}

	if (type === "name") {
		return sortedArray.sort((a, b) => a.name.localeCompare(b.name));
	}

	return sortedArray;
}
