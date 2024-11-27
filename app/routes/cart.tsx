import { json } from "@remix-run/cloudflare";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/cloudflare";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import { getSession, commitSession } from "~/services/session.server";
import { CartItem as CartItemComponent } from "~/components/cart/CartItem";
import { CartSummary } from "~/components/cart/CartSummary";
import { products } from "~/data/products";
import type { CartItem } from "~/utils/types";
export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("action");
  const productId = formData.get("productId")?.toString();
  const quantity = Number(formData.get("quantity") || 1);
  const size = formData.get("size")?.toString();
  const color = formData.get("color")?.toString();

  if (!productId) {
    return json({ error: "Valid Product ID is required" }, { status: 400 });
  }

  const session = await getSession(request.headers.get("Cookie"), context);
  const cart = session.get("cart") || { items: [], total: 0 };

  if (action === "add") {
    const product = products.find(p => p.id === productId);
    if (!product) {
      return json({ error: "Product not found" }, { status: 404 });
    }

    const existingItemIndex = cart.items.findIndex(
      (item: CartItem) => item.id === productId && 
        item.size === size && 
        item.color === color
    );

    if (existingItemIndex > -1) {
      // Update existing item quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0],
        size,
        color,
      });
    }

    // Recalculate cart total
    cart.total = cart.items.reduce(
      (sum: number, item: CartItem) => sum + (item.price * item.quantity),
      0
    );

    session.set("cart", cart);

    return json(
      { message: "Item added to cart" },
      {
        headers: {
          "Set-Cookie": await commitSession(session, context),
        },
      }
    );
  }

  return json({ error: "Invalid action" }, { status: 400 });
}
export async function loader({ request, context }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"), context);
  const cart = session.get("cart") || { items: [], total: 0 };
  
  return json({ 
    cart,
    error: request.url.includes("error=payment_failed") ? "Payment failed. Please try again." : null
  });
}

export default function Cart() {
  const { cart } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");

  if (error === "payment_failed") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-red-600">
            Payment Failed
          </h1>
          <p className="mt-2 text-gray-500">
            There was a problem processing your payment. Please try again.
          </p>
          <div className="mt-6">
            <Link
              to="/cart"
              className="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-900">
          Your cart is empty
        </h2>
        <p className="mt-2 text-gray-500">Add some items to get started!</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
      
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          <ul className="divide-y divide-gray-200">
            {cart.items.map((item: CartItem) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </div>

        <CartSummary cart={cart} />
      </div>
    </div>
  );
}
