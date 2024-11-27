import {
  TrashIcon_default
} from "/build/_shared/chunk-UVSUSWB2.js";
import {
  require_session
} from "/build/_shared/chunk-SNJULDTK.js";
import "/build/_shared/chunk-Q5FDL3QQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useSearchParams
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

// app/routes/cart.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_session = __toESM(require_session(), 1);

// app/components/cart/CartItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cart/CartItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cart/CartItem.tsx"
  );
  import.meta.hot.lastModified = "1732684899581.2444";
}
function CartItem({
  item
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex py-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.name, className: "h-full w-full object-cover object-center" }, void 0, false, {
      fileName: "app/components/cart/CartItem.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartItem.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex flex-1 flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: item.name }, void 0, false, {
          fileName: "app/components/cart/CartItem.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "ml-4", children: [
          "$",
          item.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartItem.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartItem.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/cart/CartItem.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-end justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: item.id }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "update" }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "quantity", min: "1", defaultValue: item.quantity, className: "w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-2 text-indigo-600 hover:text-indigo-500", children: "Update" }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartItem.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: item.id }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "action", value: "remove" }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-red-600 hover:text-red-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/cart/CartItem.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/cart/CartItem.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartItem.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartItem.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cart/CartItem.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = CartItem;
var _c;
$RefreshReg$(_c, "CartItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/cart/CartSummary.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/cart/CartSummary.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/cart/CartSummary.tsx"
  );
  import.meta.hot.lastModified = "1732694825811.393";
}
function CartSummary({
  cart
}) {
  _s();
  const fetcher = useFetcher();
  const [isProcessing, setIsProcessing] = (0, import_react3.useState)(false);
  const handleCheckout = async () => {
    if (isProcessing || !cart.items.length)
      return;
    setIsProcessing(true);
    fetcher.submit({
      action: "create_checkout"
    }, {
      method: "post",
      action: "/api/stripe/checkout"
    });
  };
  (0, import_react3.useEffect)(() => {
    if (fetcher.data?.url) {
      console.log("Redirecting to:", fetcher.data.url);
      window.location.href = fetcher.data.url;
    }
  }, [fetcher.data]);
  (0, import_react3.useEffect)(() => {
    if (fetcher.state === "idle") {
      setIsProcessing(false);
    }
  }, [fetcher.state]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border rounded-lg shadow-sm divide-y divide-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Order Summary" }, void 0, false, {
      fileName: "app/components/cart/CartSummary.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-medium text-gray-900", children: [
        "Total (",
        cart.items.length,
        " items)"
      ] }, void 0, true, {
        fileName: "app/components/cart/CartSummary.tsx",
        lineNumber: 57,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-medium text-gray-900", children: [
        "$",
        cart.total.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/cart/CartSummary.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartSummary.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/cart/CartSummary.tsx",
      lineNumber: 55,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handleCheckout, disabled: isProcessing || !cart.items.length, className: "w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 disabled:opacity-50", children: isProcessing ? "Processing..." : "Proceed to Checkout" }, void 0, false, {
        fileName: "app/components/cart/CartSummary.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      fetcher.data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm text-red-600", children: fetcher.data.error }, void 0, false, {
        fileName: "app/components/cart/CartSummary.tsx",
        lineNumber: 70,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cart/CartSummary.tsx",
      lineNumber: 66,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cart/CartSummary.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartSummary.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/cart/CartSummary.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(CartSummary, "lhj2FIJ+wfCekW1vr1ppUEx3k48=", false, function() {
  return [useFetcher];
});
_c2 = CartSummary;
var _c2;
$RefreshReg$(_c2, "CartSummary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/cart.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cart.tsx"
  );
  import.meta.hot.lastModified = "1732738194600.8179";
}
function Cart() {
  _s2();
  const {
    cart
  } = useLoaderData();
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");
  if (error === "payment_failed") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-red-600", children: "Payment Failed" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "There was a problem processing your payment. Please try again." }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/cart", className: "text-base font-medium text-indigo-600 hover:text-indigo-500", children: "Try Again" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 115,
      columnNumber: 12
    }, this);
  }
  if (cart.items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-medium text-gray-900", children: "Your cart is empty" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-gray-500", children: "Add some items to get started!" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/products", className: "mt-4 inline-block text-indigo-600 hover:text-indigo-500", children: "Continue Shopping" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 132,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-gray-900", children: "Shopping Cart" }, void 0, false, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: cart.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartItem, { item }, item.id, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 148,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CartSummary, { cart }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 142,
    columnNumber: 10
  }, this);
}
_s2(Cart, "gFmc+eIfogTWZE2jfscJvgUnfj0=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c3 = Cart;
var _c3;
$RefreshReg$(_c3, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default
};
//# sourceMappingURL=/build/routes/cart-CH4RLBVX.js.map
