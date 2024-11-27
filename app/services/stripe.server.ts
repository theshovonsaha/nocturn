import Stripe from 'stripe';
import type { CartItem } from '~/utils/types';

export async function createStripeSession(
  items: CartItem[],
  origin: string,
  secretKey: string,
  urls: { successUrl: string; cancelUrl: string }
) {
  const stripe = new Stripe(secretKey, {
    apiVersion: '2024-11-20.acacia', // Specify the API version
    typescript: true,
  });
  
  const lineItems = items.map(item => ({
    price_data: {
      currency: 'cad',
      product_data: {
        name: item.name,
        images: item.image ? [item.image] : [],
        description: item.size && item.color ? `Size: ${item.size}, Color: ${item.color}` : undefined,
      },
      unit_amount: Math.round(item.price * 100), // Ensure we're sending integers
    },
    quantity: item.quantity,
  }));

  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: urls.successUrl,
    cancel_url: urls.cancelUrl,
    billing_address_collection: 'required',
    shipping_address_collection: {
      allowed_countries: ['CA'], // Add other countries as needed
    },
    metadata: {
      cartTotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
    },
  });
}