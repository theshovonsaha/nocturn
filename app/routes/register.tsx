// app/routes/register.tsx
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { requireGuest , createUserSession } from "~/services/auth.server";

interface ActionData {
  error?: string;
  errors?: {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  fields?: {
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireGuest(request);
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const confirmPassword = form.get("confirmPassword");
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return json<ActionData>(
      { error: "Invalid form submission" },
      { status: 400 }
    );
  }

  const errors: ActionData["errors"] = {};
  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }
  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords don't match";
  }

  if (Object.keys(errors).length > 0) {
    return json<ActionData>(
      { errors, fields: { email, firstName: firstName?.toString(), lastName: lastName?.toString() } },
      { status: 400 }
    );
  }

  try {
    // Replace with your actual registration logic
    const user = { id: "new-user", email };
    return createUserSession({
      request,
      userId: user.id,
      redirectTo: "/",
    });
  } catch (error) {
    return json<ActionData>(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}

export default function Register() {
  const actionData = useActionData<ActionData>() || {};
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your existing account
            </Link>
          </p>
        </div>

        <Form method="post" className="mt-8 space-y-6">
          {actionData?.error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {actionData.error}
            </div>
          )}

          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={actionData?.fields?.firstName}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  defaultValue={actionData?.fields?.lastName}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                defaultValue={actionData?.fields?.email}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-errormessage={actionData?.errors?.email ? "email-error" : undefined}
              />
              {actionData?.errors?.email && (
                <div className="text-red-500 text-sm mt-1" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-errormessage={actionData?.errors?.password ? "password-error" : undefined}
              />
              {actionData?.errors?.password && (
                <div className="text-red-500 text-sm mt-1" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-invalid={actionData?.errors?.confirmPassword ? true : undefined}
                aria-errormessage={actionData?.errors?.confirmPassword ? "confirm-password-error" : undefined}
              />
              {actionData?.errors?.confirmPassword && (
                <div className="text-red-500 text-sm mt-1" id="confirm-password-error">
                  {actionData.errors.confirmPassword}
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}