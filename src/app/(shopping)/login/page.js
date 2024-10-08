"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  TEACHER_PENCIL_ID_INVALID,
  TEACHER_NOT_SCHEDULED,
  APPOINTMENT_IN_PAST,
  APPOINTMENT_IN_FUTURE,
  ORDER_CREATED,
} from "@/utils/constants";
import { getLocations, createShoppingOrder } from "@/app/api/schedule";

const initialState = {
  pencilId: "",
  location: "",
  isInvalidShoppingState: false,
  isFutureAppointment: false,
  showForm: true,
};

export default function LoginPage({ params, searchParams }) {
  const [pencilId, setPencilId] = useState(initialState.pencilId);
  const [location, setLocation] = useState(initialState.location);
  const [isInvalidShoppingState, setIsInvalidShoppingState] = useState(
    initialState.isInvalidShoppingState
  );
  const [isFutureAppointment, setIsFutureAppointment] = useState(
    initialState.isFutureAppointment
  );
  const [showForm, setShowForm] = useState(true);
  const [locations, setLocations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getLocations().then(setLocations);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createShoppingOrder({
      pencilId: pencilId || searchParams.pencilId,
    });

    const { message } = response;

    if (message === ORDER_CREATED) {
      console.log("getting inside conditional!!");
      // Add canshop and order_id to local storage
      localStorage.setItem("order_id", response.order_id);
      localStorage.setItem("canshop", "true");
      // Navigate to the shop page
      router.push("/shop");
      return;
    }

    if (
      message === TEACHER_PENCIL_ID_INVALID ||
      message === TEACHER_NOT_SCHEDULED ||
      message === APPOINTMENT_IN_PAST
    ) {
      setIsInvalidShoppingState(true);
      setShowForm(false);
      return;
    }

    if (message === APPOINTMENT_IN_FUTURE) {
      setIsFutureAppointment(true);
      setShowForm(false);
      return;
    }
  };

  const resetComp = () => {
    setPencilId(initialState.pencilId);
    setLocation(initialState.location);
    setIsInvalidShoppingState(initialState.isInvalidShoppingState);
    setIsFutureAppointment(initialState.isFutureAppointment);
    setShowForm(initialState.showForm);
  };

  function formElement() {
    return (
      <>
        <p className="text-center text-gray-700 mb-4">
          {!(searchParams.location && searchParams.pencilId) &&
            "Enter your details to continue"}
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
              Select a Location
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <div className="mt-10">
            {!(searchParams.location || location) ||
            !(searchParams.pencilId || pencilId) ? null : (
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
            )}
          </div>
        </form>
      </>
    );
  }

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
        {isFutureAppointment && (
          <p className="text-center text-red-500 mb-4">
            {`You have an appointment scheduled in the future. Please come back during your scheduled shopping time.`}
          </p>
        )}

        {isInvalidShoppingState && (
          <div className="mt-10">
            <h3 className="text-red-600 text-xl font-semibold pt-4">{`We Couldn't Find Your Appointment`}</h3>
            <p className=" text-sm font-semibold pt-4">
              Please schedule a shopping appointment by clicking the button
              below.
            </p>
            <p className="text-sm font-semibold py-2 italic">
              {`If you believe this is an error, please contact Pencil Box at XXX-XXX-XXXX.`}
            </p>
            <Link href="/select-time">
              <button className="w-full text-white py-4 px-4 font-semibold bg-blue-600 hover:bg-blue-700">{`Schedule Shopping`}</button>
            </Link>

            <div className="text-left pt-5">
              {/* ADD LINK TO RESET FORM */}
              <button onClick={resetComp}>
                <span className="hover:underline text-sm text-blue-600">
                  Try Again
                </span>
              </button>
            </div>
          </div>
        )}

        {showForm && formElement()}

        <div className="text-left">
          <p className="font-semibold text-md pt-5">{`Don’t know your Pencil ID?`}</p>
          <p className="text-black/50 font-light">
            You will receive the Pencil ID when you enter the store.
          </p>
        </div>
      </div>
    </div>
  );
}
