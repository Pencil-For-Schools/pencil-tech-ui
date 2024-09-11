"use client";

import React, { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Inter } from "@next/font/google";

// Load the Inter font with desired styles
const inter = Inter({ subsets: ["latin"] });

/**
 * InventoryListItem Component
 * Handles the display and management of each item in the inventory, including quantity adjustments.
 * 
 * @param {Object} item - The item object with details such as name, max amount, and in stock.
 * @param {Object} cart - The current cart state to manage quantities.
 * @param {Function} setCart - Function to update the cart state and local storage.
 * @param {number} qty - The current quantity of the item from the cart.
 */
const InventoryListItem = ({ item, cart, setCart, qty }) => {
  const [quantity, setQuantity] = useState(qty || 0);

  // Sync quantity with cart updates from parent component
  useEffect(() => {
    setQuantity(qty || 0);
  }, [qty]);

  /**
   * Updates the cart in local storage and component state.
   * @param {number} newQty - The new quantity to be set for the item.
   */
  const updateCart = (newQty) => {
    const updatedCart = { ...cart };
    if (newQty > 0) {
      updatedCart[item.id] = {
        order_id: item.id,
        name: item.name,
        value: item.value,
        item_id: item.id,
        qty: newQty,
      };
    } else {
      delete updatedCart[item.id];
    }
    setCart(updatedCart);
  };

  /**
   * Increases the quantity of the item within the limits of max amount and stock.
   */
  const handleIncrease = () => {
    const newQty = Math.min(quantity + 1, item.max_amount, item.in_stock);
    setQuantity(newQty);
    updateCart(newQty);
  };

  /**
   * Decreases the quantity of the item, ensuring it does not go below zero.
   */
  const handleDecrease = () => {
    const newQty = Math.max(quantity - 1, 0);
    setQuantity(newQty);
    updateCart(newQty);
  };

  /**
   * Sets the item quantity to its maximum allowed value.
   */
  const handleMax = () => {
    const maxQty = Math.min(item.max_amount, item.in_stock);
    setQuantity(maxQty);
    updateCart(maxQty);
  };

  /**
   * Clears the item quantity to zero.
   */
  const handleClear = () => {
    setQuantity(0);
    updateCart(0);
  };

  return (
    <div
      className={`flex flex-col bg-white rounded-lg shadow p-6 mb-4 max-w-lg mx-auto text-center ${inter.className}`}
    >
      <h2 className="text-xl font-medium">{item.name}</h2>
      <p className="text-sm text-gray-600 mb-2">Limit: {Math.min(item.max_amount, item.in_stock)}</p>
      <div className="flex items-center justify-center space-x-8 mb-2">
        <button
          onClick={handleDecrease}
          disabled={quantity === 0}
          className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 hover:bg-gray-700 disabled:bg-gray-300"
          aria-label={`Decrease quantity of ${item.name}`}
        >
          <MinusIcon className="h-10 w-10 text-white" />
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-16 text-xl text-center  rounded-lg border border-gray-300 focus:outline-none"
          aria-label={`Quantity of ${item.name}`}
        />
        <button
          onClick={handleIncrease}
          disabled={quantity >= item.max_amount || quantity >= item.in_stock}
          className="flex items-center justify-center w-20 h-20 rounded-full bg-green-800 hover:bg-green-600 disabled:bg-green-300"
          aria-label={`Increase quantity of ${item.name}`}
        >
          <PlusIcon className="h-10 w-10 text-white" />
        </button>
      </div>
      <div className="flex justify-between text-sm text-blue-500 mt-2">
        <button
          onClick={handleClear}
          className="hover:underline"
          aria-label={`Clear quantity of ${item.name}`}
        >
          Clear
        </button>
        <button
          onClick={handleMax}
          className="hover:underline"
          aria-label={`Set maximum quantity of ${item.name}`}
        >
          Max
        </button>
      </div>
    </div>
  );
};

export default InventoryListItem;
