import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { createStripeSession } from "../services/stripe.server";
import { getSession } from "../services/session.server"; // Remove commitSession since we're not modifying the session yet

export async function action({ request, context }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const session = await getSession(request.headers.get("Cookie"));
    const cart = session.get("cart");

    if (!cart?.items?.length) {
      return json({ error: "Cart is empty" }, { status: 400 });
    }

    const origin = new URL(request.url).origin;
    const stripeSession = await createStripeSession(
      cart.items,
      origin,
      context.STRIPE_SECRET_KEY as string,
      {
        successUrl: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${origin}/cart`
      }
    );

    // Don't clear the cart here - wait until payment success
    return json({ url: stripeSession.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}