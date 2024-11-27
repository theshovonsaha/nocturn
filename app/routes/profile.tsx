import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, useActionData, useLoaderData, useNavigation } from "@remix-run/react";
import { requireUser } from "~/services/auth.server";
import type { ProfileUpdateForm, User } from "~/utils/types";

// Loader to ensure only authenticated users can access this route
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const user = await requireUser(request);
    return json({ user });
  } catch (error) {
    console.error("Profile loader error:", error);
    throw error;
  }
}

// Action to handle profile updates
export async function action({ request }: ActionFunctionArgs) {
  try {
    const user = await requireUser(request);
    const formData = await request.formData();
    const updates: ProfileUpdateForm = {
      firstName: formData.get("firstName")?.toString(),
      lastName: formData.get("lastName")?.toString(),
      phone: formData.get("phone")?.toString(),
      address: formData.get("address")?.toString(),
    };

    const updatedUser: User = {
      ...user,
      ...updates,
    };

    return json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Profile action error:", error);
    return json({
      success: false,
      error: "Failed to update profile",
    }, { status: 400 });
  }
}

export default function Profile() {
  const { user } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="mt-1 text-sm text-gray-600">
            Update your personal information and preferences.
          </p>
        </div>

        {actionData?.success && (
          <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">
            Profile updated successfully!
          </div>
        )}

        {actionData?.success === false && actionData && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
            Failed to update profile.
          </div>
        )}

        <Form method="post" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={user.firstName || ""}
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
                defaultValue={user.lastName || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={user.email}
                disabled
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 text-gray-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                defaultValue={user.phone || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows={3}
              defaultValue={user.address || ""}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save changes"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
} 