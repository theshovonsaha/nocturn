import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { getProduct } from "~/services/products.server";
import { ProductGallery } from "~/components/product/ProductGallery";
import { ProductInfo } from "~/components/product/ProductInfo";
import { RelatedProducts } from "~/components/product/RelatedProducts";

export async function loader({ params }: LoaderFunctionArgs) {
  const product = await getProduct(params.id as string);
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return json({ product });
}

export function ErrorBoundary() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Product Not Found
        </h1>
        <p className="mt-2 text-gray-500">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <a
          href="/products"
          className="mt-6 inline-block text-indigo-600 hover:text-indigo-500"
        >
          ← Back to Products
        </a>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <RelatedProducts category={product.category} currentProductId={product.id} />
    </div>
  );
} 