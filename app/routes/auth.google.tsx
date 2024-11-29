import type { ActionFunctionArgs } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

export default function GoogleAuth() {
  return null;
}

export async function action({ request, context }: ActionFunctionArgs) {
  // Redirect to Google OAuth consent screen
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    client_id: context.GOOGLE_CLIENT_ID as string,
    redirect_uri: `${new URL(request.url).origin}/auth/google/callback`,
    response_type: 'code',
    scope: 'email profile',
    prompt: 'select_account',
  })}`;

  return redirect(googleAuthUrl);
} 