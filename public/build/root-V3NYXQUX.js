import {
  ShoppingBagIcon_default,
  UserCircleIcon_default
} from "/build/_shared/chunk-UVSUSWB2.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Form,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-JSNAWBJA.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-QCYRUURS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./services/session.server
var require_session = __commonJS({
  "empty-module:./services/session.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./services/auth.server
var require_auth = __commonJS({
  "empty-module:./services/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);

// app/components/layout/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/Layout.tsx"
  );
  import.meta.hot.lastModified = "1732688155388.053";
}
function Layout({
  children,
  user,
  cart,
  isAuthenticated
}) {
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold", children: "Nocturn Clothing" }, void 0, false, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "inline-flex items-center px-1 pt-1 text-gray-900", children: "Home" }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/products", className: "inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900", children: "Products" }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Layout.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/cart", className: "group -m-2 p-2 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBagIcon_default, { className: "h-6 w-6 text-gray-400 group-hover:text-gray-500" }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 51,
            columnNumber: 17
          }, this),
          itemCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800", children: itemCount }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 52,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "text-sm font-medium text-gray-700 hover:text-gray-800", children: "Sign in" }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 59,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md", children: "Sign up" }, void 0, false, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 62,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 58,
          columnNumber: 35
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex items-center space-x-1 p-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircleIcon_default, { className: "h-6 w-6 text-gray-400" }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-700", children: user?.firstName || user?.email || "Account" }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 68,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 66,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-0 w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in-out z-50", style: {
            top: "calc(100% + 4px)"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/profile", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Profile" }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 75,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/orders", className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Orders" }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100", children: "Sign out" }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 82,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/layout/Layout.tsx",
              lineNumber: 81,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/layout/Layout.tsx",
            lineNumber: 72,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Layout.tsx",
          lineNumber: 65,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Layout.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children }, void 0, false, {
      fileName: "app/components/layout/Layout.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Layout.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_session = __toESM(require_session(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
}];
function App() {
  _s();
  const {
    user,
    cart,
    isAuthenticated
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", suppressHydrationWarning: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { user, cart, isAuthenticated, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, { context: {
        user,
        cart,
        isAuthenticated
      } }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(App, "9YDKWxAoKrtHw8xMoRzEDPlVx/A=", false, function() {
  return [useLoaderData];
});
_c2 = App;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Error | Nocturn Clothing" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center px-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Oops! Something went wrong" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-lg text-gray-600", children: "Please try again later or contact support if the problem persists." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "text-base font-medium text-indigo-600 hover:text-indigo-500", children: [
          "Go back home",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 118,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_c22 = ErrorBoundary;
var _c2;
var _c22;
$RefreshReg$(_c2, "App");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-V3NYXQUX.js.map
