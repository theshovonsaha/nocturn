/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
      {
        onRecoverableError(error: unknown) {
          if (error instanceof Error && !error.message.includes('Hydration failed')) {
            console.warn("Recovered from error:", error);
          }
        },
      }
    );
  });
}

if (typeof window !== 'undefined') {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
  } else {
    window.setTimeout(hydrate, 100);
  }
}
