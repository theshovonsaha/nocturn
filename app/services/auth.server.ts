// app/services/auth.server.ts
import { AppLoadContext, redirect } from "@remix-run/cloudflare";
import { getSession, commitSession, Session } from "./session.server";
import type { User } from "../utils/types";

// Simulated user database for demonstration
// Replace this with your actual database logic
const MOCK_USER: User = {
    id: "1",
    email: "demo@example.com",
    firstName: "Demo",
    lastName: "User",
    emailVerified: true,
    name: ""
};

export async function getUserFromSession(
  session: Session
): Promise<User | null> {
  try {
    const userId = session.get("userId");
    if (!userId) return null;

    // In a real app, you would fetch the user from your database
    // For now, we'll return a mock user if we have a userId
    return MOCK_USER;
  } catch (error) {
    console.error("Error getting user from session:", error);
    return null;
  }
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> {
  try {
    // Replace this with your actual authentication logic
    if (email === "demo@example.com" && password === "password") {
      return MOCK_USER;
    }

    throw new Error("Invalid credentials");
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}

export async function requireUser(request: Request, context: AppLoadContext): Promise<User> {
  try {
    const session = await getSession(request.headers.get("Cookie"), context);
    const user = await getUserFromSession(session);

    if (!user) {
      // Store the current URL to redirect back after login
      const url = new URL(request.url);
      session.set("redirectTo", url.pathname);

      throw redirect("/login", {
        headers: {
          "Set-Cookie": await commitSession(session, context),
        },
      });
    }

    return user;
  } catch (error) {
    console.error("Error requiring user:", error);
    throw error;
  }
}

export async function requireGuest(request: Request, context: AppLoadContext): Promise<null> {
  try {
    const session = await getSession(request.headers.get("Cookie"), context);
    const user = await getUserFromSession(session);

    if (user) {
      throw redirect("/");
    }

    return null;
  } catch (error) {
    console.error("Error requiring guest:", error);
    throw error;
  }
}

export async function createUserSession({
  request,
  context,
  userId,
  redirectTo = "/",
}: {
  request: Request;
  context: AppLoadContext;
  userId: string;
  redirectTo?: string;
}): Promise<Response> {
  try {
    const session = await getSession(request.headers.get("Cookie"), context);
    session.set("userId", userId);

    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await commitSession(session, context),
      },
    });
  } catch (error) {
    console.error("Error creating user session:", error);
    throw error;
  }
}

export async function logoutUser(request: Request, context: AppLoadContext): Promise<Response> {
  const session = await getSession(request.headers.get("Cookie"), context);

  // Keep the cart when logging out
  const cart = {
    items: session.get("cartItems") || [],
    total: session.get("cartTotal") || 0,
  };

  // Get a fresh session
  const newSession = await getSession(null, context);

  // Restore cart to the new session
  newSession.set("cartItems", cart.items);
  newSession.set("cartTotal", cart.total);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(newSession, context),
    },
  });
}