"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage({ params, searchParams }) {
  const [pencilId, setPencilId] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add canshop true to local storage
    localStorage.setItem("canshop", "true");
    // Navigate to the shop page
    router.push("/shop");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="p-4 rounded-lg shadow-md w-full max-w-md text-center">
      <div className="flex justify-center space-x-4 p-4 mb-4">
          <img
            src="/images/pencil-icon-2.f7c1ee4b.svg"
            id="pencil-icon"
            alt="A cartoon pencil"
            className="h-24 w-24"
          />
          <div className="text-left">
            <h2 className="text-gray-500 font-semibold text-2xl">Welcome to</h2> {/* Doubled the font size */}
            <h1 className="text-black font-bold text-6xl">PENCIL</h1> {/* Doubled the font size */}
          </div>
        </div>
        <p className="text-center text-gray-700 mb-4">
        {!(searchParams.location && searchParams.pencilId) && 'Enter your details to continue'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Enter your PENCIL ID"
            value={searchParams.pencilId || pencilId}
            disabled={!!searchParams.pencilId}
            onChange={(e) => setPencilId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            value={searchParams.location || location}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!!searchParams.location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option value="1">Nashville</option>
            <option value="2">Antioch</option>
            <option value="3">Madison</option>
          </select>
          <button
            type="submit"
            className={`w-full text-white py-2 font-semibold transition duration-200 ${
              !(searchParams.location || location) ||
              !(searchParams.pencilId || pencilId)
                ? "hover:bg-gray-300 bg-gray-300"
                : "hover:bg-blue-500 bg-blue-400"
            }`}
            disabled={
              !(searchParams.location || location) ||
              !(searchParams.pencilId || pencilId)
            }
          >
            {`Let's Go Shopping!`}
          </button>
        </form>
      </div>
    </div>
  );
}
