import {
  require_auth
} from "/build/_shared/chunk-BZ5ICFE4.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Link,
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

// empty-module:~/services/orders.server
var require_orders = __commonJS({
  "empty-module:~/services/orders.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/orders.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_orders = __toESM(require_orders(), 1);

// app/utils/dates.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/dates.ts"
  );
  import.meta.hot.lastModified = "1732688173230.3025";
}
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

// app/routes/orders.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/orders.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/orders.tsx"
  );
  import.meta.hot.lastModified = "1732688215335.339";
}
function Orders() {
  _s();
  const {
    orders
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900", children: "Order History" }, void 0, false, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Check the status of recent orders and view order details" }, void 0, false, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow overflow-hidden sm:rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200", children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/orders/${order.id}`, className: "block hover:bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-indigo-600 truncate", children: [
          "Order #",
          order.id
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 56,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: [
          "Placed on ",
          formatDate(order.date)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 59,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: [
          "$",
          order.total.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 64,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "delivered" ? "bg-green-100 text-green-800" : order.status === "shipped" ? "bg-blue-100 text-blue-800" : order.status === "processing" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: order.status.charAt(0).toUpperCase() + order.status.slice(1) }, void 0, false, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 67,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 54,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 53,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 52,
      columnNumber: 15
    }, this) }, order.id, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 51,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Orders, "REZ/uewjGaXhSxuZZAJ5w5to6lI=", false, function() {
  return [useLoaderData];
});
_c = Orders;
var _c;
$RefreshReg$(_c, "Orders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Orders as default
};
//# sourceMappingURL=/build/routes/orders-GQPZNL6C.js.map
