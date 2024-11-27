// app/components/layout/Layout.tsx
import { Link, Form } from "@remix-run/react";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import type { User, CartItem } from "../../utils/types";

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  cart: {
    items: CartItem[];
    total: number;
  };
  isAuthenticated: boolean;
}

export function Layout({ children, user, cart, isAuthenticated }: LayoutProps) {
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Nocturn Clothing</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-1 pt-1 text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
                >
                  Products
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link to="/cart" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                {itemCount > 0 && (
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Auth Buttons */}
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <div className="relative group">
                  <button className="flex items-center space-x-1 p-2">
                    <UserCircleIcon className="h-6 w-6 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {user?.firstName || user?.email || "Account"}
                    </span>
                  </button>
                  <div 
                    className="absolute right-0 w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in-out z-50"
                    style={{ top: 'calc(100% + 4px)' }}
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <Form method="post" action="/logout">
                      <button
                        type="submit"
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </Form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}