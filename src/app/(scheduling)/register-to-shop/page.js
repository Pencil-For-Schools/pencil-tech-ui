'use client';

import { useEffect, useState } from 'react';

const intialState = {
  email: '',
  school: '',
}

// https://example.com/register-to-shop?schedule_item_id={ID}
export default function ConfirmTime({ params, searchParams}) {
  const [email, setEmail] = useState(intialState.email);
  const [school, setSchool] = useState(intialState.school);


  useEffect(()=>{
    // MAKE CALL TO API USING SEARCHPARAMS ID :
    
  }, [params, searchParams])

  const resetForm = () => {
    setEmail(intialState.email);
    setSchool(intialState.school);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email", email);
    console.log("School", school);
    console.log("YOU SUBMITTED, YA FILTHY ANIMAL! We need an API");

    resetForm();
  }

  return (
    <div className="flex flex-col items-center justify-center mt-[120px] relative z-[1000]">
      <div className="shadow-md bg-white/80 rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Time</h2>
        <div className="p-4 rounded-md mb-6">
          <p className="text-lg font-medium text-gray-900">January 21, 2025</p>
          <p className="text-sm text-gray-700">Time: 12:00 PM CST</p>
          <p className="text-sm text-gray-700">Location: Nashville Pencil Box</p>
          <p className="text-sm text-green-600 font-semibold">Available Spots: 10</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">School Name</label>
            <select
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 transition-colors"
            >
              Confirm
            </button>
            <button
              type="button"
              className="flex-1 bg-red-100 text-red-600 px-4 py-2 rounded-md hover:bg-red-200 transition-colors"
            >
              Cancel Time
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
