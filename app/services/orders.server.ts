import type { Order } from '~/utils/types';

// Mock data for testing
const MOCK_ORDERS: Order[] = [
  {
    id: 'ord_1',
    date: '2024-03-15T10:00:00Z',
    status: 'delivered',
    total: 159.97,
    items: [
      {
        id: 'prod_1',
        name: 'Classic Black T-Shirt',
        price: 29.99,
        quantity: 2,
        image: '/images/products/black-tshirt.jpg',
      },
      {
        id: 'prod_2',
        name: 'Denim Jeans',
        price: 99.99,
        quantity: 1,
        image: '/images/products/denim-jeans.jpg',
      },
    ],
    shippingAddress: {
      street: '123 Main St',
      city: 'Toronto',
      state: 'ON',
      zipCode: 'M5V 3L9',
      country: 'Canada',
    },
  },
  // Add more mock orders as needed
];

export async function getUserOrders(userId: string): Promise<Order[]> {
    // In a real app, this would fetch from your database
    console.log("Fetching orders for user:", userId);
  return MOCK_ORDERS;
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  // In a real app, this would fetch from your database
  return MOCK_ORDERS.find(order => order.id === orderId) || null;
} 