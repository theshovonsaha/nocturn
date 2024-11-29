import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({
    ...context.env
  })
});
