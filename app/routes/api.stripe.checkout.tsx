import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { createStripeSession } from "../services/stripe.server";
import { getSession } from "../services/session.server";

export default function StripeCheckout() {
  return null;
}
export async function action({ request, context }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }
  console.log("Stripe Key Available:", !!context.STRIPE_SECRET_KEY);
  console.log("Context:", {
    ...context,
    STRIPE_SECRET_KEY: context.STRIPE_SECRET_KEY ? "[REDACTED]" : undefined
  });
  // Validate Stripe key exists using context
  if (!context?.STRIPE_SECRET_KEY) {
    return json(
      { error: "Stripe configuration error" },
      { status: 500 }
    );
  }

  try {
    const session = await getSession(request.headers.get("Cookie"), context);
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

    if (!stripeSession?.url) {
      console.error("Stripe session creation failed:", stripeSession);
      return json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return json({ url: stripeSession.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    if (error instanceof Error) {
      return json(
        { error: error.message || "Failed to create checkout session" },
        { status: 500 }
      );
    }
    return json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}