import { Form } from "@remix-run/react";

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string | null;
  priceRange: [number, number];
  onPriceRangeChange: (newRange: [number, number]) => void;
}

export function FilterSidebar({
  categories,
  selectedCategory,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const handleCategoryChange = () => {
    // Form will automatically submit when radio changes
  };

  return (
    <div className="w-64 flex-shrink-0">
      <Form method="get" className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Categories</h3>
          <div className="mt-4 space-y-4">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  value={category}
                  defaultChecked={category === selectedCategory}
                  onChange={handleCategoryChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={category} className="ml-3 text-sm text-gray-600">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
          <div className="mt-4 flex items-center space-x-4">
            <input
              type="number"
              name="minPrice"
              value={priceRange[0]}
              onChange={(e) =>
                onPriceRangeChange([Number(e.target.value), priceRange[1]])
              }
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span>to</span>
            <input
              type="number"
              name="maxPrice"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceRangeChange([priceRange[0], Number(e.target.value)])
              }
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Apply Filters
        </button>
      </Form>
    </div>
  );
} 