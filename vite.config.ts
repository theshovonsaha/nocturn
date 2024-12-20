import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import type { CacheStorage } from "@cloudflare/workers-types";
import type { AppLoadContext } from "@remix-run/cloudflare";

export default defineConfig({
  server: {
    port: 8002,
    strictPort: true,
    hmr: {
      port: 8002,
      protocol: 'ws',
      host: 'localhost'
    },
  },
  plugins: [
    remixCloudflareDevProxy({
      getLoadContext: (): AppLoadContext => ({
        cloudflare: {
          env: {
            SESSION_SECRET: process.env.SESSION_SECRET,
            STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
            STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
            STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
            GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
          },
          cf: {} as unknown as IncomingRequestCfProperties,
          ctx: {} as unknown as ExecutionContext,
          caches: {} as unknown as CacheStorage,
        },
        SESSION_SECRET: process.env.SESSION_SECRET,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      })
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      serverModuleFormat: "esm",
      ignoredRouteFiles: ["**/.*"],
    }),
    tsconfigPaths(),
  ],
});