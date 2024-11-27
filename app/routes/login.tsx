// app/routes/login.tsx
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { loginUser, createUserSession, requireGuest } from "~/services/auth.server";
import { SocialLoginButtons } from "~/components/auth/SocialLoginButtons";

export async function loader({ request }: LoaderFunctionArgs) {
  // Redirect to home if already logged in
  await requireGuest(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/";

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return json(
      { error: "Invalid form submission" },
      { status: 400 }
    );
  }

  try {
    const user = await loginUser({ email, password });
    return createUserSession({
      request,
      userId: user.id,
      redirectTo,
    });
  } catch (error) {
    return json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }
}

export default function Login() {
  const actionData = useActionData<{ error?: string }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        <Form method="post" className="mt-8 space-y-6">
          {actionData?.error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {actionData.error}
            </div>
          )}

          <SocialLoginButtons />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/password/reset-request"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}