// app/types.ts

export interface User {
  id: string;
    email: string;
    name: string;
  firstName?: string;
  lastName?: string;
  profilePicture?: string;
  emailVerified?: boolean;
  phone?: string;
  address?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

export interface Collection {
  id: number;
  title: string;
  subtitle: string;
  coverImage: string;
  videoUrl: string;
  thumbnails: string[];
  tag?: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  featured?: boolean;
}

// Session related types
export interface SessionData {
  userId?: string;
  cart?: {
    items: CartItem[];
    total: number;
  };
}

// Form data types
export interface LoginForm {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterForm extends LoginForm {
  firstName?: string;
  lastName?: string;
  confirmPassword: string;
}

export interface ProfileUpdateForm {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
}

export interface PasswordUpdateForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export type Cart = {
  items: Array<CartItem>; // Replace 'any' with your actual item type
  total: number;
};