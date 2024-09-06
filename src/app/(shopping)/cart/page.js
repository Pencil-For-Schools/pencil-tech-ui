"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState({});
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);
  }, []);

  const handleBack = () => {
    router.push("/shop");
  };

  const handleSubmit = () => {
    console.log("Order submitted:", cart);
    localStorage.removeItem("cart");
    router.push("/thank-you");
  };

  const isEmpty = Object.keys(cart).length === 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
        <button onClick={handleBack} className="text-blue-600 font-semibold mb-4">&larr; Back</button>
        {isEmpty ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6">Looks like you haven’t added anything to your cart yet.</p>
            <button
              onClick={handleBack}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Go Back to Shop
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-xl font-bold mb-4">Order Summary</h1>
            <ul className="mb-6">
              {Object.values(cart).map((item) => (
                <li key={item.item_id} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>Qty: {item.qty}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
