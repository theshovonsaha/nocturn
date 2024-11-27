// app/routes/products_.$productId.tsx
import { json } from "@remix-run/cloudflare";
import { useLoaderData, Link, useFetcher } from "@remix-run/react";
import { useState } from "react";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { ProductGallery } from "~/components/product/ProductGallery";
import { RelatedProducts } from "~/components/product/RelatedProducts";
import { products as productData } from "~/data/products";

// Add type definition at the top of the file
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
};

// Update the products data to include sizes
const products: Product[] = productData.map(product => ({
  ...product,
  sizes: product.sizes || [],
  colors: product.colors || [],
}));

export async function loader({ params }: LoaderFunctionArgs) {
  const product = products.find(p => p.id === params.productId);
  
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  return json({ product });
}

export default function ProductDetail() {
  const { product } = useLoaderData<typeof loader>();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const fetcher = useFetcher();
  const isAdding = fetcher.state === "submitting";

  const handleAddToCart = () => {
  const formData = {
    productId: product.id,
    action: "add",
    quantity: "1",
  };

  // Only add size and color if they exist and are selected
  if (product.sizes?.length && selectedSize) {
    formData.size = selectedSize;
  }
  if (product.colors?.length && selectedColor) {
    formData.color = selectedColor;
  }

  fetcher.submit(
    formData,
    { method: "post", action: "/cart" }
  );
};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <ProductGallery images={product.images} />

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {product.name}
          </h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="mt-4 prose prose-sm text-gray-500">
              <p>{product.description}</p>
            </div>
          </div>

          {product.sizes && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <div className="mt-2 grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-md
                      ${selectedSize === size
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 grid grid-cols-4 gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-md
                      ${selectedColor === color
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-900 border border-gray-200'
                      }
                    `}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <button
              onClick={handleAddToCart}
              disabled={isAdding || (product.sizes && !selectedSize) || (product.colors && !selectedColor)}
              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isAdding ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <RelatedProducts
        category={product.category}
        currentProductId={product.id}
      />
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
      <p className="mt-2 text-lg text-gray-500">
        The product you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-6">
        <Link
          to="/products"
          className="text-base font-medium text-indigo-600 hover:text-indigo-500"
        >
          Back to Products<span aria-hidden="true"> →</span>
        </Link>
      </div>
    </div>
  );
}