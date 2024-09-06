"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to PENCIL</h1>
        <p className="text-center text-gray-700 mb-6">
          Please enter your PENCIL ID and location to get started.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your PENCIL ID"
            value={pencilId}
            onChange={(e) => setPencilId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Location</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            {/* Add more options as needed */}
          </select>
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 rounded-full font-semibold hover:bg-blue-500 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
