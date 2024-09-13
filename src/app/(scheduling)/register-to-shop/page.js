"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SchoolsSelect from "@/components/SchoolsSelect";
import ConfirmedDetailsComp from "@/components/Confirmed";
import { singleSchedule } from "@/utils/data/singleSchedule";
import { getSingleSchedule, registerToShop } from "@/app/api/schedule";

const intialState = {
  email: "",
  schoolId: "",
};

export default function ConfirmTime({ params, searchParams }) {
  const [email, setEmail] = useState(intialState.email);
  const [schoolId, setSchoolId] = useState(intialState.schoolId);
  const [scheduleItem, setScheduleItem] = useState(singleSchedule);
  const [confirmed, setConfirmed] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getSingleSchedule(searchParams.schedule_item_id).then(setScheduleItem);
  }, [params, searchParams]);

  const resetForm = () => {
    setEmail(intialState.email);
    setSchoolId(intialState.schoolId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await registerToShop({ email, schoolId });

    resetForm();
    // after API call resolves and response is registered,
    setConfirmed(true);
  };

  const availability = scheduleItem?.location?.availability;

  return (
    <div className="flex flex-col items-center justify-center mt-[120px] relative z-[1000]">
      <div className="shadow-md bg-white/80 rounded-lg p-6 w-full max-w-sm">
        {confirmed ? (
          <ConfirmedDetailsComp scheduleItem={scheduleItem} />
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Confirm Time
            </h2>
            {scheduleItem.title ? (
              <p>{scheduleItem.title.toUpperCase()}</p>
            ) : null}
            <div className="rounded-md mb-6">
              <p className="text-lg font-bold text-gray-900">
                {scheduleItem.date}
              </p>
              <p className="text-lg text-gray-700">Time: {scheduleItem.time}</p>
              <p className="text-lg text-gray-700">
                Location: {scheduleItem?.location?.loc}
              </p>
              <p
                className={`text-lg ${
                  availability ? "text-green-600 " : "text-red-600"
                } font-semibold`}
              >
                Available Spots: {availability}
              </p>
            </div>
            {availability ? (
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
            ) : (
              <h3 className="mb-5 font-bold">
                There are no more availble spots for this time.
              </h3>
            )}

            <button
              type="button"
              onClick={() => router.push("/select-time")}
              className="w-full text-red-600 px-4 py-4 rounded-md border-red-600 border hover:bg-red-800 hover:text-white transition-colors"
            >
              Select a Different Time
            </button>
          </>
        )}
      </div>
    </div>
  );
}
