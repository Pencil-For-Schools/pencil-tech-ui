"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SchoolsSelect from "@/components/SchoolsSelect";
import ConfirmedDetailsComp from "@/components/Confirmed";
import {
  getSingleSchedule,
  createScheduleItemTeacher,
} from "@/app/api/schedule";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  schoolId: "",
  phone: "",
};

// http://localhost:3000/register-to-shop/teacher-info?email=email@remail.com&school_id=38&schedule_item_id=3
export default function TeacherInfoPage({ params, searchParams }) {
  const [email, setEmail] = useState(searchParams.email);
  const [firstName, setFirstName] = useState(initialState.firstName);
  const [lastName, setLastName] = useState(initialState.lastName);
  const [phone, setPhone] = useState(initialState.phone);
  const [loading, setLoading] = useState(true);
  const [schoolId, setSchoolId] = useState(searchParams.school_id);
  const [selectedShop, setSelectedShop] = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [teacherId, setTeacherId] = useState(searchParams.teacher_id);
  const [scheduleItemId, setScheduleItemId] = useState(
    searchParams.schedule_item_id
  );

  const router = useRouter();

  const resetForm = () => {
    setEmail(initialState.email);
    setFirstName(initialState.firstName);
    setLastName(initialState.lastName);
    setSchoolId(initialState.schoolId);
    setPhone(initialState.phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createScheduleItemTeacher({
      scheduleItemId,
      email,
      phone,
      firstName,
      lastName,
      teacherId,
      schoolId,
    });

    setConfirmed(true);

    resetForm();
  };

  // TODO: FINISH WITH API
  useEffect(() => {
    const { schedule_item_id } = searchParams;
    getSingleSchedule(schedule_item_id).then(setSelectedShop);
  }, [params, searchParams]);

  const availability = selectedShop?.location?.availability;

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
          <ConfirmedDetailsComp scheduleItem={selectedShop} />
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
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
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
            <SchoolsSelect schoolId={schoolId} setSchoolId={setSchoolId} />
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
