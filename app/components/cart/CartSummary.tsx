import { useFetcher } from "@remix-run/react";
import { useState, useEffect } from "react";
import type { Cart } from "~/utils/types";

interface CartSummaryProps {
  cart: Cart;
}

export function CartSummary({ cart }: CartSummaryProps) {
  const fetcher = useFetcher<{ url?: string; error?: string }>();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    if (isProcessing || !cart.items.length) return;
    setIsProcessing(true);
    
    fetcher.submit(
      { action: "create_checkout" },
      { method: "post", action: "/api/stripe/checkout" }
    );
  };

  useEffect(() => {
    if (fetcher.data?.url) {
      window.location.href = fetcher.data.url;
    }
  }, [fetcher.data]);

  useEffect(() => {
    if (fetcher.state === "idle") {
      setIsProcessing(false);
    }
  }, [fetcher.state]);

  return (
    <div className="lg:col-span-5">
      <div className="border rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-base font-medium text-gray-900">
                Total ({cart.items.length} items)
              </div>
              <div className="text-base font-medium text-gray-900">
                ${cart.total.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleCheckout}
              disabled={isProcessing || !cart.items.length}
              className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isProcessing ? "Processing..." : "Proceed to Checkout"}
            </button>
            {fetcher.data?.error && (
              <p className="mt-2 text-sm text-red-600">{fetcher.data.error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}