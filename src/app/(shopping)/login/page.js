"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  TEACHER_EMAIL_INVALID,
  TEACHER_EMAIL_NOT_SCHEDULED,
  APPOINTMENT_IN_PAST,
  APPOINTMENT_IN_FUTURE,
} from "@/utils/constants";

export default function LoginPage({ params, searchParams }) {
  const [pencilId, setPencilId] = useState("");
  const [location, setLocation] = useState("");
  const [isInvalidShoppingState, setIsInvalidShoppingState] = useState(false);
  const [isFutureAppointment, setIsFutureAppointment] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Uncomment one to trigger an error state
      // throw new Error(TEACHER_EMAIL_INVALID);
      // throw new Error(TEACHER_EMAIL_NOT_SCHEDULED);
      // throw new Error(APPOINTMENT_IN_FUTURE);
      // throw new Error(APPOINTMENT_IN_PAST);

      // Add canshop true to local storage
      localStorage.setItem("canshop", "true");
      // Navigate to the shop page
      router.push("/shop");
    } catch (error) {
      // TODO: When we have a payload from the api, the check should be on the error_type property
      if (error.message === APPOINTMENT_IN_FUTURE) {
        setIsFutureAppointment(true);
        return;
      }
      if (
        error.message === TEACHER_EMAIL_INVALID ||
        error.message === TEACHER_EMAIL_NOT_SCHEDULED ||
        error.message === APPOINTMENT_IN_PAST
      ) {
        setIsInvalidShoppingState(true);
        return;
      }
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20 relative z-[1000]">
      <div className="p-4 rounded-lg shadow-md w-full max-w-md bg-gray-50 text-center">
        <div className="flex justify-center z-50 space-x-4 p-4 mb-4">
          <img
            src="/images/pencil-icon-2.f7c1ee4b.svg"
            id="pencil-icon"
            alt="A cartoon pencil"
            className="h-24 w-24"
          />
          <div className="text-left">
            <h2 className="text-gray-500 font-semibold text-2xl">Welcome to</h2>{" "}
            {/* Doubled the font size */}
            <h1 className="text-black font-bold text-6xl">PENCIL</h1>{" "}
            {/* Doubled the font size */}
          </div>
        </div>
        <p className="text-center text-gray-700 mb-4">
          {!(searchParams.location && searchParams.pencilId) &&
            "Enter your details to continue"}
        </p>
        {isFutureAppointment && (
          <p className="text-center text-red-500 mb-4">
            {`You have an appointment scheduled in the future. Please come back during your scheduled shopping time.`}
          </p>
        )}

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
              Select a Location
            </option>
            <option value="1">Nashville</option>
            <option value="2">Antioch</option>
            <option value="3">Madison</option>
          </select>

          {isInvalidShoppingState ? (
            <div className="mt-10">
              <p className="text-red-600 text-sm font-semibold pt-4">
                {`We couldn't find an appointment for you in our records. Please schedule a shopping appointment by clicking the button below.`}
              </p>
              <p className="text-red-500 text-sm font-semibold py-2 italic">
                {`If you believe this is an error, please contact Pencil Box at XXX-XXX-XXXX.`}
              </p>
              <Link href="/select-time">
                <button className="w-full text-white py-4 px-4 font-semibold bg-blue-600 hover:bg-blue-700">{`Schedule Shopping`}</button>
              </Link>
            </div>
          ) : !(searchParams.location || location) ||
            !(searchParams.pencilId || pencilId) ? null : (
            <div className="mt-10">
              <button
                type="submit"
                className={`w-full text-white py-4 font-semibold transition duration-200 ${
                  !(searchParams.location || location) ||
                  !(searchParams.pencilId || pencilId) ||
                  isFutureAppointment
                    ? "hover:bg-gray-300 bg-gray-300"
                    : "hover:bg-gray-800 bg-gray-900 animate-bounce"
                }`}
                disabled={
                  !(searchParams.location || location) ||
                  !(searchParams.pencilId || pencilId)
                }
              >
                {`Let's Go Shopping!`}
              </button>
            </div>
          )}
        </form>

        {/* <div className="pt-10 text-left">
          <p className="font-semibold text-gray-500 mb-1">Don’t know your Pencil ID?</p>
          <p className="text-gray-400">
            Please contact Pencil Box:
            <a href="mailto:email@pencilbox.com" className="text-blue-500 underline">email@pencilbox.com</a> <br />
            or ###-###-####
          </p>
        </div> */}
      </div>
    </div>
  );
}
