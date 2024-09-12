"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'


const intialState = {
  email: "",
  school: "",
};

const schedule_item_sample = {
  date: "January 21, 2025",
  time: "12:00 PM CST",
  location: "Nashville Pencil Box",
  available_spots: 0,
};

// https://example.com/register-to-shop?schedule_item_id={ID}
export default function ConfirmTime({ params, searchParams }) {
  const [email, setEmail] = useState(intialState.email);
  const [school, setSchool] = useState(intialState.school);
  const [scheduleItem, setScheduleItem] = useState(schedule_item_sample);

  const router = useRouter()

  useEffect(() => {
    // MAKE CALL TO API USING SEARCHPARAMS ID :
  }, [params, searchParams]);

  const resetForm = () => {
    setEmail(intialState.email);
    setSchool(intialState.school);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email", email);
    console.log("School", school);
    console.log("YOU SUBMITTED, YA FILTHY ANIMAL! We need an API");

    resetForm();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[120px] relative z-[1000]">
      <div className="shadow-md bg-white/80 rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Time</h2>
        <div className="pt-6 rounded-md mb-6">
          <p className="text-lg font-bold text-gray-900">{scheduleItem.date}</p>
          <p className="text-lg text-gray-700">Time: {scheduleItem.time}</p>
          <p className="text-lg text-gray-700">
            Location: {scheduleItem.location}
          </p>
          <p className={`text-lg ${scheduleItem.available_spots ? 'text-green-600 ': 'text-red-600'  } font-semibold`}>
            Available Spots: {scheduleItem.available_spots}
          </p>
        </div>

        {scheduleItem.available_spots ? (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                <option value="">Select School</option>
                <option value="School 1">School 1</option>
                <option value="School 2">School 2</option>
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
        ) : 
        (
          <h3 className="mb-5 font-bold">There are no more availble spots for this time.</h3>
        )}

        <button
          type="button"
          onClick={() => router.push('/select-time')}
          className="w-full text-red-600 px-4 py-4 rounded-md border-red-600 border hover:bg-red-800 hover:text-white transition-colors"
        >
          Select a Different Time
        </button>
      </div>
    </div>
  );
}
