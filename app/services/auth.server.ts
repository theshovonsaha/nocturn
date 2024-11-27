// app/services/auth.server.ts
import { redirect } from "@remix-run/cloudflare";
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

export async function requireUser(request: Request): Promise<User> {
  try {
    const session = await getSession(request.headers.get("Cookie"), { secure: true });
    const user = await getUserFromSession(session);

    if (!user) {
      // Store the current URL to redirect back after login
      const url = new URL(request.url);
      session.set("redirectTo", url.pathname);

      throw redirect("/login", {
        headers: {
          "Set-Cookie": await commitSession(session, { secure: true }),
        },
      });
    }

    return user;
  } catch (error) {
    console.error("Error requiring user:", error);
    throw error;
  }
}

export async function requireGuest(request: Request): Promise<null> {
  try {
    const session = await getSession(request.headers.get("Cookie"), { secure: true });
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
  userId,
  redirectTo = "/",
}: {
  request: Request;
  userId: string;
  redirectTo?: string;
}): Promise<Response> {
  try {
    const session = await getSession(request.headers.get("Cookie"), { secure: true });
    session.set("userId", userId);

    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await commitSession(session, { secure: true }),
      },
    });
  } catch (error) {
    console.error("Error creating user session:", error);
    throw error;
  }
}

export async function logoutUser(request: Request): Promise<Response> {
  try {
    const session = await getSession(request.headers.get("Cookie"), { secure: true });

    // Keep the cart when logging out
    const cart = {
      items: session.get("cartItems") || [],
      total: session.get("cartTotal") || 0,
    };

    // Get a fresh session
    const newSession = await getSession(null, { secure: true });

    // Restore cart to the new session
    newSession.set("cartItems", cart.items);
    newSession.set("cartTotal", cart.total);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(newSession, { secure: true }),
      },
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    throw error;
  }
}