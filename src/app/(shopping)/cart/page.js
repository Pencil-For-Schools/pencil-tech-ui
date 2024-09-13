"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const canShop = localStorage.getItem("canshop") === "true";

    if (!canShop) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(savedCart);
  }, []);

  const impact = useMemo(() => {
    if (Object.keys(cart).length > 0) {
      return Object.values(cart).reduce(
        (acc, item) => acc + item.qty * item.value,
        0
      );
    }
    return 0;
  }, [cart]);

  const handleBack = () => {
    router.push("/shop");
  };

  const handleSubmit = async () => {
    await finalizeOrder(cart);
    localStorage.removeItem("cart");
    sessionStorage.setItem("showThankYou", "true");
    router.push("/thank-you");
  };

  const isEmpty = Object.keys(cart).length === 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-20 relative z-[1000]">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Order Summary</h1>
        {!isEmpty ? (
          <>
            <div className="bg-white shadow-md rounded p-4 mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-gray-300 pb-2 text-left text-gray-700 font-semibold">
                      Item
                    </th>
                    <th className="border-b-2 border-gray-300 pb-2 text-right text-gray-700 font-semibold">
                      Qty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(cart).map((item) => (
                    <tr key={item.item_id} className="border-b border-gray-200">
                      <td className="py-2 text-gray-800">{item.name}</td>
                      <td className="py-2 text-right font-semibold text-gray-800">
                        {item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-4 font-bold text-green-700">
                      Total Impact
                    </td>
                    <td className="pt-4 text-right font-bold text-green-700">
                      ${impact.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white py-3 hover:bg-green-700 transition duration-300"
              >
                Finalize Order
              </button>
              <button
                onClick={handleBack}
                className="bg-white text-black border border-gray-300 py-3 hover:bg-gray-100 transition duration-300"
              >
                Go Back
              </button>
            </div>
          </>
        ) : (
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
        )}
      </div>
    </div>
  );
}
