"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import InventoryListItem from "@/components/inventory/InventoryListItem";
import { useRouter } from "next/navigation";
import { inventory } from "@/utils/data/sample_inventory_response";
import { QueueListIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/20/solid";

export default function InventoryList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState({});
  const router = useRouter();

  /**
   * useEffect to check if the user has permission to shop when the component mounts.
   * If permission is not granted, the user is redirected to the login page.
   * If permission is granted, the component loads the existing cart from local storage.
   */
  useEffect(() => {
    const checkCanShop = () => {
      const canShop = localStorage.getItem("canshop") === "true";

      if (!canShop) {
        router.push("/login");
      } else {
        setLoading(false);
        const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
        setCart(storedCart); // Update state with cart from local storage
      }
    };

    checkCanShop();
  }, [router]);

  /**
   * Updates the cart in both state and local storage.
   * @param {Object} updatedCart - The updated cart object.
   */
  const updateCartInLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /**
   * Filters the inventory based on the current search term.
   * @returns {Array} - Filtered list of inventory items matching the search term.
   */
  const filteredItems = useMemo(() => {
    return inventory.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm, inventory]);

  /**
   * Navigates to the cart review page when the "Review Order" button is clicked.
   */
  const handleReviewOrder = () => {
    router.push("/cart");
  };

  /**
   * Sets all items in the cart to their maximum quantities.
   * Prompts the user for confirmation before executing the action.
   */
  const handleMaxAll = () => {
    const confirmMax = window.confirm(
      "You are about to get the maximum quantity of all items in the Pencil Box."
    );
    if (confirmMax) {
      const updatedCart = {};
      filteredItems.forEach((item) => {
        updatedCart[item.id] = {
          order_id: item.id,
          name: item.name,
          value: item.value,
          item_id: item.id,
          qty: Math.min(item.max_amount, item.in_stock),
        };
      });
      updateCartInLocalStorage(updatedCart);
    }
  };

  /**
   * Clears all items from the cart.
   * Prompts the user for confirmation before executing the action.
   */
  const handleClearAll = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all items? This action cannot be undone."
    );
    if (confirmClear) {
      updateCartInLocalStorage({}); // Clear quantities to zero
    }
  };

  /**
   * Checks if there are any items in the cart to enable/disable the "Review Order" button.
   * @returns {boolean} - True if there are items in the cart, false otherwise.
   */
  const hasItemsInCart = Object.values(cart).some((item) => item.qty > 0);
  const cartCount = Object.values(cart).reduce((total, item) => total + item.qty, 0);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-white ">
      {/* Container for responsiveness and max width */}
      <div className="max-w-xl mx-auto p-4 pb-20">
        {/* Search Bar and Review Order Button */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4 flex max-w-xl mx-auto flex-col">
          <div className="flex justify-left z-50 pb-3">
            <img
              src="/images/pencil-icon-2.f7c1ee4b.svg"
              id="pencil-icon"
              alt="A cartoon pencil"
              className="h-6 w-6 pr-3"
            />
            <div className="text-left">
              {/* Doubled the font size */}
              <h1 className="text-black font-bold text-lg">PENCIL BOX</h1>{" "}
              {/* Doubled the font size */}
            </div>
          </div>
          <div className="flex items-center bg-gray-100 w-full max-w-md px-3">
            <input
              type="text"
              placeholder="Search for supplies..."
              className="flex-1 p-2 bg-gray-100 rounded-full focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search for supplies"
              value={searchTerm}
            />
            {/* Clear button (X icon) */}
            <button
              onClick={() => setSearchTerm("")}
              className="text-gray-500 hover:text-gray-700 focus:outline-none px-2"
              aria-label="Clear search"
            >
              ✖️
            </button>
          </div>
        </div>

        {/* Adjust padding to prevent overlap */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold text-center">Select your Items</h2>
          {filteredItems.map((item) => (
            <InventoryListItem
              key={item.id}
              item={item}
              cart={cart}
              setCart={updateCartInLocalStorage}
              qty={cart[item.id]?.qty || 0} // Pass the current quantity from the cart
            />
          ))}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border border-topshadow-lg p-4 flex justify-between items-center max-w-xl mx-auto z-50">
        <button
          onClick={handleClearAll}
          className={`${
            !hasItemsInCart ? "text-gray-400" : "text-red-500"
          } text-sm text-center flex flex-col items-center justify-center space-y-1`}
          disabled={!hasItemsInCart}
        >
          <TrashIcon className="h-6" />
          <span>Clear All</span>
        </button>
        <button
          onClick={handleReviewOrder}
          disabled={!hasItemsInCart}
          className={`px-4 py-2 rounded text-lg flex items-center justify-center space-x-2 ${
            hasItemsInCart
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-200 text-blue-500 cursor-not-allowed"
          }`}
          aria-label="Review Order"
        >
          <span>Review Order ({cartCount})</span>
        </button>

        <button
          onClick={handleMaxAll}
          className="text-black text-sm text-center flex flex-col items-center justify-center space-y-1"
        >
          <QueueListIcon className="h-6" />
          Max All
        </button>
      </div>
    </div>
  );
}
