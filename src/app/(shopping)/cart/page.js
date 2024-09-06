"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState({});
  const [totalImpact, setTotalImpact] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);

    // Calculate total impact only if the cart is not empty
    if (Object.keys(savedCart).length > 0) {
      const impact = Object.values(savedCart).reduce(
        (acc, item) => acc + item.qty * item.value,
        0
      );
      setTotalImpact(impact.toFixed(2));
    }
  }, []);

  const handleBack = () => {
    router.push("/shop");
  };

  const handleSubmit = () => {
    console.log("Order submitted:", cart);
    localStorage.removeItem("cart");
    sessionStorage.setItem("showThankYou", "true");
    router.push("/thank-you");
  };

  const isEmpty = Object.keys(cart).length === 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-20">
      <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
        <button
          onClick={handleBack}
          className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full font-bold mb-4 transition duration-300"
        >
          &larr; Back to Shop
        </button>
        {isEmpty ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6">
              Looks like you haven’t added anything to your cart yet.
            </p>
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
            <table className="w-full mb-6 text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2">Item</th>
                  <th className="border-b py-2">Qty</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(cart).map((item) => (
                  <tr key={item.item_id}>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalImpact > 0 && (
              <div className="text-lg font-bold text-green-600">
                Total Impact: ${totalImpact}
              </div>
            )}
          </>
        )}
      </div>

      {/* Fixed Claim Supplies Button */}
      {!isEmpty && (
        <button
          onClick={handleSubmit}
          className="fixed bottom-0 left-0 right-0 bg-red-500 text-white py-3 rounded-none hover:bg-red-600 text-lg w-full"
        >
          Claim Supplies
        </button>
      )}
    </div>
  );
}
