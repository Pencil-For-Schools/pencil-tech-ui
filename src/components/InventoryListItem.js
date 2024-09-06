import React, { useEffect, useState, useCallback } from "react";
import CircleBtn from "@/components/CircleBtn";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

export default function InventoryListItem({ name, id, orderId, max, min = 0 }) {
  const [qty, setQty] = useState(0);

  // Helper function to get the cart from localStorage
  const getCart = () => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? {};
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return {};
    }
  };

  // Helper function to save the cart back to localStorage
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Load quantity from localStorage when the component mounts
  useEffect(() => {
    const cart = getCart();
    if (cart[id]) setQty(cart[id].qty);
  }, [id]);

  // Function to handle button clicks (add/subtract)
  const handleClick = useCallback(
    (action) => {
      const cart = getCart();

      // Initialize item if it doesn't exist
      if (!cart[id]) {
        cart[id] = { order_id: orderId, item_id: id, qty: 0 };
      }

      if (action === "add") {
        cart[id].qty += 1;
        setQty((prevQty) => prevQty + 1);
      } else if (action === "subtract" && cart[id].qty > 0) {
        if (cart[id].qty === 1) {
          // Remove item from cart if quantity reaches zero
          delete cart[id];
          setQty(0);
        } else {
          cart[id].qty -= 1;
          setQty((prevQty) => prevQty - 1);
        }
      }

      // Save the cart if it has items, otherwise clear it
      Object.keys(cart).length ? saveCart(cart) : localStorage.removeItem("cart");
    },
    [id, orderId]
  );

  return (
    <div className="text-white">
      <CircleBtn func={() => handleClick("subtract")} disabled={qty === min}>
        <MinusIcon aria-hidden="true" className="h-5 w-5" />
      </CircleBtn>
      {max}
      {name} {qty}
      <CircleBtn func={() => handleClick("add")} disabled={qty === max}>
        <PlusIcon aria-hidden="true" className="h-5 w-5" />
      </CircleBtn>
    </div>
  );
}
