// app/routes/logout.tsx
import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { logoutUser } from "~/services/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  return logoutUser(request);
}

export default function Logout() {
  return <div>Logging out...</div>;
}