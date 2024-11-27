import { useState } from "react";
import { useFetcher } from "@remix-run/react";
import type { Product } from "~/utils/types";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const fetcher = useFetcher();

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Black", "White", "Gray", "Navy"];

  return (
    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {product.name}
      </h1>
      <div className="mt-3">
        <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-600">Description</h3>
        <div className="mt-4 prose prose-sm text-gray-500">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="mt-6">
        <div>
          <h3 className="text-sm text-gray-600">Size</h3>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedSize === size
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm text-gray-600">Color</h3>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedColor === color
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <fetcher.Form method="post" action="/cart" className="mt-8">
          <input type="hidden" name="productId" value={product.id} />
          <input type="hidden" name="action" value="add" />
          <input type="hidden" name="size" value={selectedSize} />
          <input type="hidden" name="color" value={selectedColor} />
          <button
            type="submit"
            disabled={!selectedSize || !selectedColor}
            className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            Add to Cart
          </button>
        </fetcher.Form>
      </div>
    </div>
  );
}