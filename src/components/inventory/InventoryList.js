"use client";

import { useState, useMemo, useCallback } from "react";
import InventoryListItem from "@/components/inventory/InventoryListItem";
import { useRouter } from "next/navigation";

export default function InventoryList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Debounce without external libraries
  const handleSearch = useCallback(() => {
    let timeout;
    return (value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setSearchTerm(value.toLowerCase()), 300);
    };
  }, []);

  const debouncedSearch = handleSearch();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm, items]);

  const handleReviewOrder = () => {
    router.push("/cart");
  };

  return (
    <div className="relative bg-white min-h-screen">
      {/* Search Bar and Review Order Button */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-2 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for supplies..."
          className="border p-2 rounded max-w-md w-3/4"
          onChange={(e) => debouncedSearch(e.target.value)}
        />
        <button
          onClick={handleReviewOrder}
          className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 text-sm"
        >
          Review Order
        </button>
      </div>

      {/* Adjust padding to prevent overlap */}
      <div className="pt-20">
        {filteredItems.map((item) => (
          <InventoryListItem key={item.id} item={item} />
        ))}
        {/* Large Bottom Review Order Button */}
        <div className="mt-6 px-4">
          <button
            onClick={handleReviewOrder}
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 text-lg"
          >
            Review Order
          </button>
        </div>
      </div>
    </div>
  );
}
