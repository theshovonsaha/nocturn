import {
  products
} from "/build/_shared/chunk-Q5FDL3QQ.js";
import {
  require_cloudflare
} from "/build/_shared/chunk-NFYMXIMP.js";
import {
  Link,
  useFetcher,
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/products_.$productId.tsx
var import_cloudflare = __toESM(require_cloudflare(), 1);
var import_react5 = __toESM(require_react(), 1);

// app/components/product/ProductGallery.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/product/ProductGallery.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/product/ProductGallery.tsx"
  );
  import.meta.hot.lastModified = "1732691812113.9492";
}
function ProductGallery({
  images
}) {
  _s();
  const [mainImage, setMainImage] = (0, import_react.useState)(images[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: mainImage, alt: "Product main view", className: "w-full h-full object-center object-cover" }, void 0, false, {
      fileName: "app/components/product/ProductGallery.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/product/ProductGallery.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid grid-cols-4 gap-2", children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setMainImage(image), className: `aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${mainImage === image ? "ring-2 ring-indigo-500" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: image, alt: `View ${index + 1}`, className: "w-full h-full object-center object-cover" }, void 0, false, {
      fileName: "app/components/product/ProductGallery.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, index, false, {
      fileName: "app/components/product/ProductGallery.tsx",
      lineNumber: 33,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/product/ProductGallery.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product/ProductGallery.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(ProductGallery, "ahbPxI/rbPU9G0BKP/Vtadocq0Q=");
_c = ProductGallery;
var _c;
$RefreshReg$(_c, "ProductGallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/product/RelatedProducts.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/product/RelatedProducts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/product/RelatedProducts.tsx"
  );
  import.meta.hot.lastModified = "1732691851724.7131";
}
function RelatedProducts({
  category,
  currentProductId
}) {
  _s2();
  const [relatedProducts, setRelatedProducts] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
    const filtered = products.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4);
    setRelatedProducts(filtered);
  }, [category, currentProductId]);
  if (relatedProducts.length === 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-900", children: "Related Products" }, void 0, false, {
      fileName: "app/components/product/RelatedProducts.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4", children: relatedProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/products/${product.id}`, className: "group relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aspect-w-4 aspect-h-5 bg-gray-200 rounded-lg overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: product.images[0], alt: product.name, className: "object-cover object-center group-hover:opacity-75" }, void 0, false, {
        fileName: "app/components/product/RelatedProducts.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/product/RelatedProducts.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: product.name }, void 0, false, {
          fileName: "app/components/product/RelatedProducts.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: product.category }, void 0, false, {
          fileName: "app/components/product/RelatedProducts.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm font-medium text-gray-900", children: [
          "$",
          product.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/product/RelatedProducts.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/product/RelatedProducts.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, product.id, true, {
      fileName: "app/components/product/RelatedProducts.tsx",
      lineNumber: 39,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/components/product/RelatedProducts.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/product/RelatedProducts.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s2(RelatedProducts, "ZIhKvYjVUAzc2clqVv28jwPsb80=");
_c2 = RelatedProducts;
var _c2;
$RefreshReg$(_c2, "RelatedProducts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/products_.$productId.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/products_.$productId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/products_.$productId.tsx"
  );
  import.meta.hot.lastModified = "1732737622871.8538";
}
var products2 = products.map((product) => ({
  ...product,
  sizes: product.sizes || [],
  colors: product.colors || []
}));
function ProductDetail() {
  _s3();
  const {
    product
  } = useLoaderData();
  const [selectedSize, setSelectedSize] = (0, import_react5.useState)("");
  const [selectedColor, setSelectedColor] = (0, import_react5.useState)("");
  const fetcher = useFetcher();
  const isAdding = fetcher.state === "submitting";
  const handleAddToCart = () => {
    const formData = {
      productId: product.id,
      action: "add",
      quantity: "1",
      size: selectedSize,
      color: selectedColor
    };
    if (product.sizes?.length && selectedSize) {
      formData.size = selectedSize;
    }
    if (product.colors?.length && selectedColor) {
      formData.color = selectedColor;
    }
    fetcher.submit(formData, {
      method: "post",
      action: "/cart"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProductGallery, { images: product.images }, void 0, false, {
        fileName: "app/routes/products_.$productId.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold tracking-tight text-gray-900", children: product.name }, void 0, false, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "sr-only", children: "Product information" }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-3xl tracking-tight text-gray-900", children: [
            "$",
            product.price.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Description" }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 prose prose-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: product.description }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        product.sizes && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Size" }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2 grid grid-cols-3 gap-3", children: product.sizes.map((size) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setSelectedSize(size), className: `
                      px-4 py-3 text-sm font-medium rounded-md
                      ${selectedSize === size ? "bg-indigo-600 text-white" : "bg-white text-gray-900 border border-gray-200"}
                    `, children: size }, size, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 107,
            columnNumber: 44
          }, this)) }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 104,
          columnNumber: 29
        }, this),
        product.colors && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: "Color" }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2 grid grid-cols-4 gap-3", children: product.colors.map((color) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setSelectedColor(color), className: `
                      px-4 py-3 text-sm font-medium rounded-md
                      ${selectedColor === color ? "bg-indigo-600 text-white" : "bg-white text-gray-900 border border-gray-200"}
                    `, children: color }, color, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 119,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/products_.$productId.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 116,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: handleAddToCart, disabled: isAdding || product.sizes && !selectedSize || product.colors && !selectedColor, className: "w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50", children: isAdding ? "Adding to Cart..." : "Add to Cart" }, void 0, false, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products_.$productId.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products_.$productId.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RelatedProducts, { category: product.category, currentProductId: product.id }, void 0, false, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products_.$productId.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s3(ProductDetail, "veip+O1AwY2MetLb/TkZGIAo5oE=", false, function() {
  return [useLoaderData, useFetcher];
});
_c3 = ProductDetail;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Product not found" }, void 0, false, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-lg text-gray-500", children: "The product you're looking for doesn't exist." }, void 0, false, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 146,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/products", className: "text-base font-medium text-indigo-600 hover:text-indigo-500", children: [
      "Back to Products",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: " \u2192" }, void 0, false, {
        fileName: "app/routes/products_.$productId.tsx",
        lineNumber: 151,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/products_.$productId.tsx",
      lineNumber: 149,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products_.$productId.tsx",
    lineNumber: 144,
    columnNumber: 10
  }, this);
}
_c22 = ErrorBoundary;
var _c3;
var _c22;
$RefreshReg$(_c3, "ProductDetail");
$RefreshReg$(_c22, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  ProductDetail as default
};
//# sourceMappingURL=/build/routes/products_.$productId-E6OTS4Z4.js.map
