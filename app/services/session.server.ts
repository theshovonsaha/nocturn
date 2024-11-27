// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/cloudflare";
import type { Session } from "@remix-run/cloudflare";
import type { CartItem } from "~/utils/types";

const DEFAULT_SECRET = 'default-dev-secret-do-not-use-in-production';

export const sessionStorage = (env: any) => createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [env.SESSION_SECRET || DEFAULT_SECRET],
    secure: env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

export async function getSession(cookieHeader: string | null, env: any) {
  return sessionStorage(env).getSession(cookieHeader);
}

export async function commitSession(session: Session, env: any) {
  return sessionStorage(env).commitSession(session);
}

export async function destroySession(session: Session, env: any) {
  return sessionStorage(env).destroySession(session);
}

// Cart helpers
export async function getCartFromSession(request: Request, env: any) {
  const session = await getSession(request.headers.get("Cookie"), env);
  return session.get("cart") || { items: [], total: 0 };
}

export async function updateCartInSession(
  session: Session, 
  cart: { 
    items: CartItem[]; 
    total: number; 
  },
  env: any
) {
  session.set("cart", cart);
  return session;
}

export type { Session }