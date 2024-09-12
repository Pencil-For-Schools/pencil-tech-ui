"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function ThankYouPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage for the showThankYou flag
    const showThankYou = sessionStorage.getItem("showThankYou");
    if (showThankYou !== "true") {
      router.push("/login");
    } else {
      // Remove canshop property from local storage
      localStorage.removeItem("canshop");
      setLoading(false);

      // Set a timeout to redirect after 20 seconds
      const timer = setTimeout(() => {
        sessionStorage.removeItem("showThankYou");
        router.push("/login");
      }, 20000);

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
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
    <div className="flex flex-col items-center justify-center bg-gray-100/80 text-gray-800 p-4 relative z-[1000] mt-40">
      <h1 className="text-2xl font-bold flex text-center mb-6"><span>Order Complete</span> <CheckCircleIcon className="h-8 text-green-700" /> </h1>
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-xl text-center text-gray-700">
        Thank you, teachers, for all that you do. Your dedication is inspiring, and we are grateful for your hard work and commitment to educating our future.
      </p>
    </div>
  );
}
