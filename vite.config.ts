import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
      getLoadContext: () => ({
        env: process.env,
        SESSION_SECRET: process.env.SESSION_SECRET,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
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