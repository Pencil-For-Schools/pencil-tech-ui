"use client";

import React, { useEffect, useState, useCallback } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const useCart = () => {
  const getCart = () => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? {};
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return {};
    }
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return { getCart, saveCart };
};

export default function InventoryListItem({ item, orderId, min = 0 }) {
  const [qty, setQty] = useState(0);
  const { getCart, saveCart } = useCart();
  const max = Math.min(item.max_amount, item.in_stock);

  useEffect(() => {
    const cart = getCart();
    if (cart[item.id]) setQty(cart[item.id].qty);
  }, [item.id, getCart]);

  const updateCart = (newQty) => {
    const cart = getCart();
    if (newQty <= 0) {
      delete cart[item.id];
    } else {
      cart[item.id] = { order_id: orderId, name: item.name, value: item.value, item_id: item.id, qty: newQty };
    }
    saveCart(cart);
    setQty(newQty);
  };

  const handleClick = useCallback(
    (action) => {
      if (action === "add" && qty < max) {
        updateCart(qty + 1);
      } else if (action === "subtract" && qty > min) {
        updateCart(qty - 1);
      }
    },
    [qty, max, min, updateCart]
  );

  const handleSetMax = () => {
    updateCart(max);
  };

  const handleSetMin = () => {
    updateCart(0);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded shadow-md p-4 mb-4">
      <div className="flex items-center justify-between w-full">
        <span className="text-sm text-blue-500 cursor-pointer" onClick={handleSetMin}>
          Min
        </span>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <span className="text-sm text-blue-500 cursor-pointer" onClick={handleSetMax}>
          Max
        </span>
      </div>
      <p className="text-center text-gray-600">Limit: {max}</p>
      <div className="flex items-center justify-between mt-2">
        <button
          onClick={() => handleClick("subtract")}
          disabled={qty === min}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100"
        >
          <MinusIcon className="h-5 w-5 text-gray-700" />
        </button>
        <input
          type="number"
          value={qty}
          readOnly
          className="mx-4 text-xl text-center border-none focus:outline-none"
          max={max}
        />
        <button
          onClick={() => handleClick("add")}
          disabled={qty === max}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-green-200 hover:bg-green-300 disabled:bg-green-100"
        >
          <PlusIcon className="h-5 w-5 text-green-700" />
        </button>
      </div>
    </div>
  );
}
