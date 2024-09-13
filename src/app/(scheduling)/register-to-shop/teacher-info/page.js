"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "@heroicons/react/20/solid";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  school: "",
};

const sampleSchoolData = {
  id: 1,
  date: "January 21, 2025",
  location: {
    id: 1,
    availability: 10,
    loc: "Nashville Pencil Box",
  },
  time: "12:00 PM CST",
};


const constantData = {
  email: "email@pencilbox.com",
  phoneNumber: "###-###-####",
  questionOrConcern: "If you have any questions or concerns please contact Pencil Box:",
  reminder: "You will receive an email 24 hours before your scheduled time for self-check in to start your shopping process.",
  thanks: "Thanks for signing up.",
}

export default function TeacherInfoPage({ params, searchParams }) {
  const [email, setEmail] = useState(searchParams.email);
  const [firstName, setFirstName] = useState(initialState.firstName);
  const [lastName, setLastName] = useState(initialState.lastName);
  const [loading, setLoading] = useState(true);
  const [school, setSchool] = useState(searchParams.school_id);
  const [selectedShop, setSelectedShop] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const router = useRouter();

  const resetForm = () => {
    setEmail(initialState.email);
    setFirstName(initialState.firstName);
    setLastName(initialState.lastName);
    setSchool(initialState.school);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name", firstName);
    console.log("Last Name", lastName);
    console.log("Email", email);
    console.log("School", school);
    console.log("YOU SUBMITTED, YA FILTHY ANIMAL! We need an API");

    // ON SUCCESS, ROUTE TO CONFIRMATION
    setConfirmed(true);

    resetForm();
  };

  useEffect(() => {
    setSelectedShop(sampleSchoolData);
  }, [params, searchParams]);

  const availability = sampleSchoolData?.location?.availability;

  if (!loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-[120px] relative z-[1000]">
        <p className="font-bold relative text-3xl">Finalizing...</p>
        {/* Reusing spinner component from inventory list */}
        <div className="flex items-center justify-center bg-gray-100">
          <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
        </div>
        {/* End */}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[50px] relative z-[1000]">
      <div className="p-4 rounded-lg shadow-md w-full max-w-md bg-gray-50">
        {confirmed ? (
          <>
            <div className="flex gap-5 items-center mb-10">
              <p className="font-bold text-3xl">Time Confirmed</p>
              <CheckIcon className="bg-green-700 h-8 p-1 rounded-full text-white/90" />
            </div>
            <div className="p-6 rounded-md mb-6 bg-black">
              <p className="font-bold text-2xl font-bold text-white">
                {selectedShop.date}
              </p>
              <p className="text-lg text-white">Time: {selectedShop.time}</p>
              <p className="text-lg text-white">
                Location: {selectedShop?.location?.loc}
              </p>
            </div>
            <div>
              <p className="font-semibold text-xl pb-5">{constantData.thanks}</p>
              <p className="font-medium text-lg pb-5">{constantData.reminder}</p>
              <p className="text-black/50 font-light">
                {constantData.questionOrConcern} {constantData.email} or{" "}
                {constantData.phoneNumber}
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-bold text-3xl mb-5">Confirm Time</h2>

            <div className="pt-6 rounded-md mb-6">
              <p className="text-lg font-bold text-gray-900">
                {selectedShop.date}
              </p>
              <p className="text-lg text-gray-700">Time: {selectedShop.time}</p>
              <p className="text-lg text-gray-700">
                Location: {selectedShop?.location?.loc}
              </p>
              <p
                className={`text-lg ${
                  availability ? "text-green-600 " : "text-red-600"
                } font-semibold`}
              >
                Available Spots: {availability}
              </p>
            </div>
          </>
        )}

        {!confirmed ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                School Name
              </label>
              <select
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select School
                </option>
                <option value="1">School 1</option>
                <option value="2">School 2</option>
                {/* TODO: Connect to API Add more schools as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="flex-1 bg-blue-900 text-white px-4 py-4 rounded-md hover:bg-blue-600 mb-4 transition-colors"
              >
                Confirm
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
