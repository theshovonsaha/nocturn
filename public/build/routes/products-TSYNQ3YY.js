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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/products.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);

// app/components/product/ProductCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/product/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/product/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1732696136605.7444";
}
function ProductCard({
  product
}) {
  _s();
  const fetcher = useFetcher();
  const isAdding = fetcher.state === "submitting";
  const handleAddToCart = () => {
    fetcher.submit({
      productId: product.id.toString(),
      action: "add",
      quantity: "1"
    }, {
      method: "post",
      action: "/cart"
      // Specify the action URL
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "group relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-4 aspect-h-5 bg-gray-200 rounded-lg overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.id}`, className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.images[0], alt: product.name, className: "w-full h-full object-cover object-center" }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-end p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleAddToCart, disabled: isAdding, className: "relative w-full bg-black bg-opacity-75 py-2 px-4 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 hover:bg-opacity-90", "aria-label": `Add ${product.name} to cart`, children: isAdding ? "Adding..." : "Add to Cart" }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product/ProductCard.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: product.name }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: product.category }, void 0, false, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm font-medium text-gray-900", children: [
        "$",
        product.price.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/product/ProductCard.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product/ProductCard.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product/ProductCard.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(ProductCard, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = ProductCard;
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/product/FilterSidebar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/product/FilterSidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/product/FilterSidebar.tsx"
  );
  import.meta.hot.lastModified = "1732692159499.2085";
}
function FilterSidebar({
  categories,
  selectedCategory,
  priceRange,
  onPriceRangeChange
}) {
  const handleCategoryChange = () => {
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-64 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "get", className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Categories" }, void 0, false, {
        fileName: "app/components/product/FilterSidebar.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 space-y-4", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "radio", id: category, name: "category", value: category, defaultChecked: category === selectedCategory, onChange: handleCategoryChange, className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
          fileName: "app/components/product/FilterSidebar.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: category, className: "ml-3 text-sm text-gray-600", children: category }, void 0, false, {
          fileName: "app/components/product/FilterSidebar.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this)
      ] }, category, true, {
        fileName: "app/components/product/FilterSidebar.tsx",
        lineNumber: 36,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/product/FilterSidebar.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product/FilterSidebar.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Price Range" }, void 0, false, {
        fileName: "app/components/product/FilterSidebar.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", name: "minPrice", value: priceRange[0], onChange: (e) => onPriceRangeChange([Number(e.target.value), priceRange[1]]), className: "w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" }, void 0, false, {
          fileName: "app/components/product/FilterSidebar.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "to" }, void 0, false, {
          fileName: "app/components/product/FilterSidebar.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "number", name: "maxPrice", value: priceRange[1], onChange: (e) => onPriceRangeChange([priceRange[0], Number(e.target.value)]), className: "w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" }, void 0, false, {
          fileName: "app/components/product/FilterSidebar.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product/FilterSidebar.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/product/FilterSidebar.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700", children: "Apply Filters" }, void 0, false, {
      fileName: "app/components/product/FilterSidebar.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product/FilterSidebar.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/product/FilterSidebar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c2 = FilterSidebar;
var _c2;
$RefreshReg$(_c2, "FilterSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/products.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products.tsx"
  );
  import.meta.hot.lastModified = "1732692173988.4429";
}
function Products() {
  _s2();
  const {
    products,
    categories,
    priceRange
  } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePriceRangeChange = (newRange) => {
    const params = new URLSearchParams(searchParams);
    params.set("minPrice", newRange[0].toString());
    params.set("maxPrice", newRange[1].toString());
    setSearchParams(params);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FilterSidebar, { categories, selectedCategory: searchParams.get("category"), priceRange, onPriceRangeChange: handlePriceRangeChange }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductCard, { product }, product.id, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 70,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/products.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s2(Products, "hTwCOw+zkbyu3/PZFEXh1xZlUI8=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c3 = Products;
var _c3;
$RefreshReg$(_c3, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default
};
//# sourceMappingURL=/build/routes/products-TSYNQ3YY.js.map
