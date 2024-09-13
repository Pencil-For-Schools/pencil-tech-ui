"use client";

import { getSchedules } from "@/app/api/schedule";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const d = new Date();
let defaultMonth = d.getMonth();

export default function SelectTime() {
  const [monthId, setMonthId] = useState(defaultMonth + 1);
  const [scheduleList, setScheduleList] = useState([]);
  
  const handleChange = async (e) => {
    setMonthId(e.target.value)
    const schedules = await getSchedules(e.target.value);
    setScheduleList(schedules);
  }

  useEffect(() => {
    getSchedules(monthId).then(setScheduleList)
  }, [])

  return (
    <main>
      <div className="flex flex-col gap-10 items-center px-5 py-10 relative z-[1000]">
        <h1 className="font-bold text-3xl">Select Your Shop Date</h1>

        <select
          value={monthId}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 relative z-[1000]"
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Month
          </option>
          <option value={1}>January</option>
          <option value={2}>Februrary</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>

        <ul className="flex flex-col gap-8">
          {
            scheduleList.length ? (scheduleList.map((item) => (
            <ShopListItem data={item} key={item.id} />
          ))) : (
            <h2 className="text-2xl">Nothing Scheduled This Month</h2>
          )
          }
          
        </ul>
      </div>
    </main>
  );
}

function ShopListItem({ data }) {
  const router = useRouter();
  return (
    <li
      className="bg-white border flex flex-col gap-3 p-6 rounded-lg min-w-[375px] shadow-md"
      key={data.id}
    >
      <p className="font-bold text-2xl">{data.date}</p>

      <div className="flex flex-col gap-1">
        <p className="font-medium">Time: {data.time}</p>
        <p className="font-light">Location: {data.location.loc}</p>
        <p
          className={`font-semibold ${
            data.location.availability === 0 && "text-red-500"
          }`}
        >
          Available Spots: {data.location.availability}
        </p>
      </div>

      <button
        className="active:scale-95 bg-blue-900 disabled:bg-blue-900/50 disabled:cursor-not-allowed p-5 rounded-md w-full text-white/90 transition w-full"
        disabled={data.location.availability === 0}
        onClick={() =>
          router.push(`/register-to-shop?schedule_item_id=${data.id}`)
        }
      >
        {data.location.availability === 0 ? "FULL" : "Book Now"}
      </button>
    </li>
  );
}
