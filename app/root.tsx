// app/root.tsx
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import "./styles/tailwind.css";
import { Layout } from "./components/layout/Layout";
import { getSession, commitSession } from "./services/session.server";
import { getUserFromSession } from "./services/auth.server";
import type { CartItem, User } from "./utils/types";
export const links: LinksFunction = () => [
  { 
    rel: "stylesheet", 
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  },
];

interface LoaderData {
  user: User | null;
  cart: {
    items: CartItem[];
    total: number;
  };
  isAuthenticated: boolean;
  ENV: {
    STRIPE_PUBLIC_KEY?: string;
  };
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  
  const session = await getSession(request.headers.get("Cookie"));
  const user = await getUserFromSession(session);
  // Get cart from session (works for both guest and logged-in users)
  const cart = session.get("cart") || { items: [], total: 0 };

  // Calculate cart total
  cart.total = cart.items.reduce(
    (sum: number, item: { price: number; quantity: number; }) => sum + (item.price * item.quantity), 
    0
  );

  const data: LoaderData = {
    user,
    cart,
    isAuthenticated: !!user,
    ENV: {
      STRIPE_PUBLIC_KEY: typeof context.STRIPE_PUBLIC_KEY === 'string' ? context.STRIPE_PUBLIC_KEY : 'public',
    },
  };

  // Only commit session if it was modified
  const headers = new Headers();
  if (session.has("cart")) {
    headers.append("Set-Cookie", await commitSession(session));
  }

  return json(data, { headers });
}

export default function App() {
  const { user, cart, isAuthenticated } = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full" suppressHydrationWarning>
        <Layout 
          user={user} 
          cart={cart}
          isAuthenticated={isAuthenticated}
        >
          <Outlet context={{ user, cart, isAuthenticated }} />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Error Boundary
export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <title>Error | Nocturn Clothing</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center px-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Oops! Something went wrong
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Please try again later or contact support if the problem persists.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back home<span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}