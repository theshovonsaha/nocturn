import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({ request }: LoaderFunctionArgs) {
  const upgradeHeader = request.headers.get("Upgrade");
  
  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("Expected Upgrade: websocket", { 
      status: 426,
      headers: {
        "Content-Type": "text/plain",
      }
    });
  }

  return new Response("WebSocket endpoint", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    }
  });
}

export default function Socket() {
  return (
    <div>WebSocket Endpoint</div>
  );
} 