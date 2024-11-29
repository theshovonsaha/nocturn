import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { createStripeSession } from "../services/stripe.server";
import { getSession } from "../services/session.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  // Validate Stripe key exists
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Missing STRIPE_SECRET_KEY");
    return json(
      { error: "Stripe configuration error" },
      { status: 500 }
    );
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
      context.cloudflare.env.STRIPE_SECRET_KEY as string,
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