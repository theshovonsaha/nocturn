
import { Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { getSession, commitSession } from "~/services/session.server";
import Stripe from "stripe";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");
  
  // If no session_id and we're on the success page directly, show the success UI
  if (!sessionId && url.pathname === "/checkout/success") {
    return json({ success: true });
  }
  
  // If no session_id and not on success page, redirect to cart
  if (!sessionId) {
    return redirect("/cart");
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const cookieSession = await getSession(request.headers.get("Cookie"));
      cookieSession.set("cart", { items: [], total: 0 });

      // Instead of redirecting, return json with the updated cookie
      return redirect("/checkout/success", {
        headers: {
          "Set-Cookie": await commitSession(cookieSession),
        },
      });
    } else {
      return redirect("/cart?error=payment_failed");
    }
  } catch (error) {
    console.error("Payment verification error:", error);
    return redirect("/cart?error=payment_verification_failed");
  }
}

export default function CheckoutSuccess() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Thank you for your order!
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Your payment was processed successfully.
        </p>
        <div className="mt-6">
          <Link
            to="/products"
            className="text-base font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping<span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}