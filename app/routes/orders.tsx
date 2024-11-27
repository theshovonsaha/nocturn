import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Link, useLoaderData } from "@remix-run/react";
import { requireUser } from "~/services/auth.server";
import { getUserOrders } from "~/services/orders.server";
import { formatDate } from "~/utils/dates";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireUser(request);
  const orders = await getUserOrders(user.id);
  return json({ orders });
}

export default function Orders() {
  const { orders } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
        <p className="mt-2 text-sm text-gray-700">
          Check the status of recent orders and view order details
        </p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {orders.map((order) => (
            <li key={order.id}>
              <Link
                to={`/orders/${order.id}`}
                className="block hover:bg-gray-50"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        Order #{order.id}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Placed on {formatDate(order.date)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm font-medium text-gray-900">
                        ${order.total.toFixed(2)}
                      </p>
                      <span className={`mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}