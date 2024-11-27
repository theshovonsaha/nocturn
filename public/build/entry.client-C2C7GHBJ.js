import {
  require_client
} from "/build/_shared/chunk-O4BRYNJ4.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-JSNAWBJA.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-QCYRUURS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1732678397411.7974";
}
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      {
        onRecoverableError(error) {
          if (error instanceof Error && !error.message.includes("Hydration failed")) {
            console.warn("Recovered from error:", error);
          }
        }
      }
    );
  });
}
if (typeof window !== "undefined") {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrate);
  } else {
    window.setTimeout(hydrate, 100);
  }
}
//# sourceMappingURL=/build/entry.client-C2C7GHBJ.js.map
