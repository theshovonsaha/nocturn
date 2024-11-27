import { products } from "~/data/products";
import type { Product } from "~/utils/types";

export async function getProduct(id: string): Promise<Product | null> {
  const product = products.find(p => p.id === id);
  return product || null;
}
