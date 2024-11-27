import { useFetcher, Link } from "@remix-run/react";
import type { Product } from "~/utils/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const fetcher = useFetcher();
  const isAdding = fetcher.state === "submitting";

  const handleAddToCart = () => {
    fetcher.submit(
      {
        productId: product.id.toString(),
        action: "add",
        quantity: "1"
      },
      { 
        method: "post",
        action: "/cart"  // Specify the action URL
      }
    );
  };

  return (
    <div className="group relative">
      <div className="aspect-w-4 aspect-h-5 bg-gray-200 rounded-lg overflow-hidden">
        <Link to={`/products/${product.id}`} className="block">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </Link>
        <div className="flex items-end p-4">
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="relative w-full bg-black bg-opacity-75 py-2 px-4 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 hover:bg-opacity-90"
            aria-label={`Add ${product.name} to cart`}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <p className="mt-1 text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}