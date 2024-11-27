import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  server: {
    port: 8002,
    strictPort: true,
    hmr: {
      port: 8002,
      protocol: 'ws',
      clientPort: 8002
    },
  },
  plugins: [
    remixCloudflareDevProxy({
      getLoadContext: () => ({
        env: context.env,
        STRIPE_SECRET_KEY: context.env.STRIPE_SECRET_KEY,
        STRIPE_PUBLIC_KEY: context.env.STRIPE_PUBLIC_KEY,
        STRIPE_WEBHOOK_SECRET: context.env.STRIPE_WEBHOOK_SECRET,
        cloudflare: {
          env: context.env
        }
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
    }),
    tsconfigPaths(),
  ],
});
