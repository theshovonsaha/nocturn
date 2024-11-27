import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { products } from "~/data/products";
import type { Product } from "~/utils/types";

interface RelatedProductsProps {
  /** The category to find related products from */
  category: string;
  /** The ID of the current product to exclude from related products */
  currentProductId: string;
}

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!category || !currentProductId) return;
    
    const filtered = products
      .filter(
        (product) =>
          product.category === category && product.id !== currentProductId
      )
      .slice(0, 4);
    setRelatedProducts(filtered);
  }, [category, currentProductId]);

  // Validation checks after hooks
  if (!category) {
    console.error('RelatedProducts: category prop is required');
    return null;
  }

  if (!currentProductId) {
    console.error('RelatedProducts: currentProductId prop is required');
    return null;
  }

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group relative"
          >
            <div className="aspect-w-4 aspect-h-5 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 