import {
  ChevronLeftIcon_default,
  ChevronRightIcon_default
} from "/build/_shared/chunk-UVSUSWB2.js";
import {
  useOutletContext
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

// app/components/home/HeroCarousel.tsx
var import_react2 = __toESM(require_react(), 1);

// app/data/collections.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/collections.ts"
  );
  import.meta.hot.lastModified = "1732687547067.1416";
}
var collections = [
  {
    id: 1,
    title: "FW24 Essentials",
    subtitle: "Elevated basics for the modern wardrobe",
    coverImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    videoUrl: "https://static.vecteezy.com/system/resources/previews/007/668/059/mp4/close-up-clothes-of-fashion-designer-or-stylist-manage-new-clothes-collection-on-rack-in-studio-young-man-tailor-dressmaker-prepare-wardrobe-clothing-for-sale-free-video.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de"
    ],
    tag: "NEW IN",
    category: "Essentials"
  },
  {
    id: 2,
    title: "Studio Sport",
    subtitle: "Performance meets street style",
    coverImage: "https://images.unsplash.com/photo-1483721310020-03333e577078",
    videoUrl: "https://static.vecteezy.com/system/resources/previews/052/446/458/mp4/concentrated-athlete-training-his-arm-biceps-in-sports-club-portrait-of-young-sportsman-doing-his-workout-on-a-modern-simulator-by-pulling-rope-video.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7",
      "https://images.unsplash.com/photo-1618355776464-8666794d2520",
      "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b"
    ],
    tag: "TRENDING",
    category: "Activewear"
  },
  {
    id: 3,
    title: "Denim Culture",
    subtitle: "Japanese selvedge denim collection",
    coverImage: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
    videoUrl: "https://static.vecteezy.com/system/resources/previews/052/446/458/mp4/concentrated-athlete-training-his-arm-biceps-in-sports-club-portrait-of-young-sportsman-doing-his-workout-on-a-modern-simulator-by-pulling-rope-video.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c"
    ],
    tag: "PREMIUM",
    category: "Denim"
  },
  {
    id: 4,
    title: "BONKERS \xD7 Artist Series",
    subtitle: "Limited edition artist collaboration",
    coverImage: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    videoUrl: "https://static.vecteezy.com/system/resources/previews/012/753/216/mp4/beautiful-business-woman-walks-confidently-through-the-city-park-at-sunset-career-people-fashion-beauty-female-portraits-real-people-slow-motion-video.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254",
      "https://images.unsplash.com/photo-1503341960582-b45751874cf0",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990"
    ],
    tag: "COLLAB",
    category: "Limited Edition"
  },
  {
    id: 5,
    title: "Tech Wear 3.0",
    subtitle: "Future-ready urban gear",
    coverImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-with-a-sporty-outfit-running-outdoors-48099-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      "https://images.unsplash.com/photo-1549062572-544a64fb0c56"
    ],
    tag: "INNOVATIVE",
    category: "Technical Wear"
  },
  {
    id: 6,
    title: "Vintage Revival",
    subtitle: "Reimagined classics from the 90s",
    coverImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-black-hat-posing-on-pink-background-49172-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1525845859779-54d477ff291f",
      "https://images.unsplash.com/photo-1580635557131-ea2aa1e0182c",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8"
    ],
    tag: "CLASSIC",
    category: "Vintage"
  },
  {
    id: 7,
    title: "Summer Nights",
    subtitle: "Resort wear collection 2024",
    coverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-posing-for-the-camera-in-a-urban-context-39884-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
      "https://images.unsplash.com/photo-1599609288508-e33cc646e491",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516"
    ],
    tag: "SEASONAL",
    category: "Resort Wear"
  },
  {
    id: 8,
    title: "Street Culture",
    subtitle: "Urban essentials redefined",
    coverImage: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-walking-in-the-rain-with-umbrella-4651-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1552831388-6a0b3575b32a",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8",
      "https://images.unsplash.com/photo-1514989771522-458c9b6c035a"
    ],
    tag: "TRENDING",
    category: "Streetwear"
  },
  {
    id: 9,
    title: "Minimalist Edit",
    subtitle: "Clean lines, pure forms",
    coverImage: "https://images.unsplash.com/photo-1608748010899-18f300247112",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-walking-with-shopping-bags-and-coffee-to-o-47359-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c",
      "https://images.unsplash.com/photo-1525845859779-54d477ff291f"
    ],
    tag: "ESSENTIAL",
    category: "Minimalist"
  },
  {
    id: 10,
    title: "Varsity Blues",
    subtitle: "Collegiate inspiration meets modern style",
    coverImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-taking-pictures-in-a-city-street-47356-large.mp4",
    thumbnails: [
      "https://images.unsplash.com/photo-1561365452-adb940139ffa",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
    ],
    tag: "NEW IN",
    category: "Collegiate"
  }
];

// app/components/home/CollectionCard.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/CollectionCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/CollectionCard.tsx"
  );
  import.meta.hot.lastModified = "1732677816295.6714";
}
function CollectionCard({
  collection
}) {
  _s();
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
  const videoRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (videoRef.current) {
      videoRef.current.preload = "metadata";
    }
  }, []);
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== void 0) {
        playPromise.catch(() => {
        });
      }
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-none w-[240px] mx-2 rounded-lg overflow-hidden bg-white", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative aspect-[3/4] w-full", children: [
      collection.tag && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-2 left-2 z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs font-medium bg-black text-white rounded", children: collection.tag }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 53,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: collection.coverImage, alt: collection.title, className: `absolute inset-0 w-full h-full object-cover will-change-transform
              ${isHovered ? "opacity-0" : "opacity-100"} 
              transition-opacity duration-200`, loading: "lazy" }, void 0, false, {
          fileName: "app/components/home/CollectionCard.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { ref: videoRef, className: `absolute inset-0 w-full h-full object-cover will-change-transform
              ${isHovered ? "opacity-100" : "opacity-0"} 
              transition-opacity duration-200`, src: collection.videoUrl, playsInline: true, muted: true, loop: true }, void 0, false, {
          fileName: "app/components/home/CollectionCard.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `absolute bottom-0 left-0 right-0 flex gap-1 p-2 bg-white/90
            transform transition-transform duration-300 ease-out
            ${isHovered ? "translate-y-0" : "translate-y-full"}`, children: collection.thumbnails.map((thumbnail, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-12 rounded overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: thumbnail, alt: `${collection.title} view ${idx + 1}`, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this) }, idx, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 72,
        columnNumber: 58
      }, this)) }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/CollectionCard.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-gray-900", children: collection.title }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: collection.subtitle }, void 0, false, {
        fileName: "app/components/home/CollectionCard.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/CollectionCard.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/CollectionCard.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(CollectionCard, "413V7Aj2sAQABU4sPQ6vsJuhBNI=");
_c = CollectionCard;
var _c;
$RefreshReg$(_c, "CollectionCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/HeroCarousel.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/HeroCarousel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/HeroCarousel.tsx"
  );
  import.meta.hot.lastModified = "1732677996284.8206";
}
function HeroCarousel() {
  _s2();
  const [currentIndex, setCurrentIndex] = (0, import_react2.useState)(0);
  const [isAutoPlaying, setIsAutoPlaying] = (0, import_react2.useState)(true);
  const maxVisibleCards = 5;
  const maxIndex = collections.length - maxVisibleCards;
  const scrollContainerRef = (0, import_react2.useRef)(null);
  const handleMouseEnter = (0, import_react2.useCallback)(() => {
    setIsAutoPlaying(false);
  }, []);
  const handleMouseLeave = (0, import_react2.useCallback)(() => {
    setIsAutoPlaying(true);
  }, []);
  const scroll = (0, import_react2.useCallback)((direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    }
  }, [maxIndex]);
  (0, import_react2.useEffect)(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1);
      }, 5e3);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "w-full bg-white py-8 border-y border-gray-200", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1920px] mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center mb-6 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-medium text-black mb-1", children: "Trending" }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Find Your Vibe at Nocturn Clothing!" }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/HeroCarousel.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => scroll("left"), className: `absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white 
              shadow-md hover:bg-gray-50 transition-colors
              ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`, disabled: currentIndex === 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronLeftIcon_default, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => scroll("right"), className: `absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white 
              shadow-md hover:bg-gray-50 transition-colors
              ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""}`, disabled: currentIndex === maxIndex, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRightIcon_default, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: scrollContainerRef, className: "flex transition-transform duration-300 ease-out", style: {
        transform: `translateX(-${currentIndex * 244}px)`
        // 240px card + 4px gap
      }, children: collections.map((collection) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CollectionCard, { collection }, collection.id, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 86,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/HeroCarousel.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/HeroCarousel.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/HeroCarousel.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/home/HeroCarousel.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s2(HeroCarousel, "uPiFrUgmV+sDTtVYoYdQkAZFlDg=");
_c2 = HeroCarousel;
var _c2;
$RefreshReg$(_c2, "HeroCarousel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1732677691265.6426";
}
var meta = () => {
  return [{
    title: "Home | Nocturn Clothing"
  }, {
    name: "description",
    content: "Welcome to Nocturn Clothing"
  }];
};
function Index() {
  _s3();
  const {
    user
  } = useOutletContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto py-6 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-4 py-6 sm:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold", children: [
      "Welcome ",
      user?.name ? `back, ${user.name}` : "to Nocturn Clothing"
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeroCarousel, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s3(Index, "0z92Mv1TttvSSVsTAytDgWxjKOA=", false, function() {
  return [useOutletContext];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-L43PIP3L.js.map
