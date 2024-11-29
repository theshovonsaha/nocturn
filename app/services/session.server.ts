// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/cloudflare";
import type { Session, AppLoadContext } from "@remix-run/cloudflare";
import type { CartItem } from "~/utils/types";

const DEFAULT_SECRET = 'default-dev-secret-do-not-use-in-production';

export const sessionStorage = (context: AppLoadContext) => createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [context.SESSION_SECRET as string || DEFAULT_SECRET],
    secure: true,
    maxAge: 60 * 60 * 24 * 30,
  },
});
export async function getSession(cookieHeader: string | null, context: AppLoadContext): Promise<Session> {
  return sessionStorage(context).getSession(cookieHeader);
}

export async function commitSession(session: Session, context: AppLoadContext) {
  return sessionStorage(context).commitSession(session);
}
export async function destroySession(session: Session, context: AppLoadContext) {
  return sessionStorage(context).destroySession(session);
}

// Cart helpers
export async function getCartFromSession(request: Request, context: AppLoadContext) {
  const session = await getSession(request.headers.get("Cookie"), context);
  return session.get("cart") || { items: [], total: 0 };
}

export async function updateCartInSession(
  session: Session, 
  cart: { 
    items: CartItem[]; 
    total: number; 
  },
) {
  session.set("cart", cart);
  return session;
}

export type { Session }
