
import { json } from "@remix-run/cloudflare";
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import Stripe from "stripe";

export async function action({ request, context }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return json({ error: "No signature" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(context.STRIPE_SECRET_KEY as string);
    const payload = await request.text();
    const event = stripe.webhooks.constructEvent(
      payload,
      signature,
      context.STRIPE_WEBHOOK_SECRET as string
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        // Add additional order processing logic here
        console.log("Payment successful:", session.id);
        // You might want to store order details in your database here
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("Payment failed:", paymentIntent.id);
        // Handle failed payment
        break;
      }
    }

    return json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return json(
      { error: "Webhook error" },
      { status: 400 }
    );
  }
}