// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/cloudflare";
import type { Session } from "@remix-run/cloudflare";
import type { CartItem } from "~/utils/types";

const DEFAULT_SECRET = 'default-dev-secret-do-not-use-in-production';

export const sessionStorage = () => createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET || DEFAULT_SECRET],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

export async function getSession(cookieHeader: string | null): Promise<Session> {
  return sessionStorage().getSession(cookieHeader);
}

export async function commitSession(session: Session) {
  return sessionStorage().commitSession(session);
}

export async function destroySession(session: Session) {
  return sessionStorage().destroySession(session);
}

// Cart helpers
export async function getCartFromSession(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
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
