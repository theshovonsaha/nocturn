// app/utils/types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface CartItem {
  id: number; // Changed to number to match product IDs
  name: string;
  price: number;
  quantity: number;
  image?: string;
  size?: string;
  color?: string;
}

export interface AppContext {
  user: User | null;
  cart: {
    items: CartItem[];
    total: number;
  };
  isAuthenticated: boolean;
}