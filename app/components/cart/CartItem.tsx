import { Form } from "@remix-run/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import type { CartItem as CartItemType } from "~/utils/types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{item.name}</h3>
            <p className="ml-4">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <Form method="post" className="flex items-center">
            <input type="hidden" name="productId" value={item.id} />
            <input type="hidden" name="action" value="update" />
            <input
              type="number"
              name="quantity"
              min="1"
              defaultValue={item.quantity}
              className="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="submit"
              className="ml-2 text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </Form>

          <Form method="post" className="flex">
            <input type="hidden" name="productId" value={item.id} />
            <input type="hidden" name="action" value="remove" />
            <button
              type="submit"
              className="text-red-600 hover:text-red-500"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </Form>
        </div>
      </div>
    </li>
  );
} 