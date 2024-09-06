"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage for the showThankYou flag
    const showThankYou = sessionStorage.getItem("showThankYou");
    if (showThankYou !== "true") {
      router.push("/login");
    } else {
      setLoading(false); // Stop loading once the check is done
    }
  }, [router]);

  if (loading) {
    // Display a loader while checking session storage
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-xl text-center text-gray-700">
        Thank you, teachers, for all that you do. Your dedication is inspiring, and we are grateful for your hard work and commitment to educating our future.
      </p>
    </div>
  );
}
