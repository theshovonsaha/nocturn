import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { ProductCard } from "~/components/product/ProductCard";
import { FilterSidebar } from "~/components/product/FilterSidebar";
import { products } from "~/data/products";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search")?.toLowerCase();
  const minPrice = Number(url.searchParams.get("minPrice")) || 0;
  const maxPrice = Number(url.searchParams.get("maxPrice")) || 1000;

  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return json({ 
    products: filteredProducts, 
    categories,
    priceRange: [minPrice, maxPrice] as [number, number]
  });
}

export default function Products() {
  const { products, categories, priceRange } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePriceRangeChange = (newRange: [number, number]) => {
    const params = new URLSearchParams(searchParams);
    params.set("minPrice", newRange[0].toString());
    params.set("maxPrice", newRange[1].toString());
    setSearchParams(params);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <FilterSidebar
          categories={categories}
          selectedCategory={searchParams.get("category")}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
        />
        
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}