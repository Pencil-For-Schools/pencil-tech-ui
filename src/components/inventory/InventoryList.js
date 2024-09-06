"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import InventoryListItem from "@/components/inventory/InventoryListItem";
import { useRouter } from "next/navigation";

export default function InventoryList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkCanShop = () => {
      const canShop = localStorage.getItem("canshop") === "true";

      if (!canShop) {
        router.push("/login"); // Redirect to login or another appropriate page
      } else {
        setLoading(false); // Stop loading when access is granted
      }
    };

    checkCanShop();
  }, [router]);

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
    return items.filter((item) => item.name.toLowerCase().includes(searchTerm));
  }, [searchTerm, items]);

  const handleReviewOrder = () => {
    router.push("/cart");
  };

  if (loading) {
    // Loader while checking access permission
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-white min-h-screen">
      {/* Container for responsiveness and max width */}
      <div className="max-w-xl mx-auto p-4">
        {/* Search Bar and Review Order Button */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-2 flex justify-between items-center max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for supplies..."
            className="border p-2 rounded w-full max-w-md"
            onChange={(e) => debouncedSearch(e.target.value)}
            aria-label="Search for supplies"
          />
          <button
            onClick={handleReviewOrder}
            className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 text-sm ml-2"
            aria-label="Review Order"
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
          <div className="mt-6">
            <button
              onClick={handleReviewOrder}
              className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 text-lg"
              aria-label="Review Order"
            >
              Review Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
