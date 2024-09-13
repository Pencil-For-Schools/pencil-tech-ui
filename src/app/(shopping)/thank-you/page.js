"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

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
    <div className="flex flex-col  text-gray-800 p-4 relative z-[1000] mt-20">
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-md p-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
            Thank You <StarIcon className="h-8 text-green-700 inline-block" />
          </h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900">
              Thank you for shopping at the DG PENCIL Box!
            </h3>
            <p className="text-sm text-gray-700 mt-2">
              Your dedication to students in our community is inspiring and we
              are honored to serve you!
              <br />
              <br />
              If you are interested in connecting with PENCIL’s other programs,
              please reach out to a member of our staff by clicking the link
              below.
            </p>
            <p className="text-right text-gray-500 mt-4">Pencil Team</p>
          </div>
          <a href="https://pencilforschools.org/pencil-connect/">
            <img src="/images/pencils.png" className="mt-5"/>
          </a>
        </div>
      </div>
    </div>
  );
}
