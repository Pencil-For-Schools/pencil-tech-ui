import { schedules } from "@/utils/data/sample_schedules_response";
import { single_schedule } from "@/utils/data/single_schedule";

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_API;

const getSchedules = async (monthId) => {
  const response = await fetch(`${dbUrl}/schedules?month=${monthId}`);
  const data = response.json();

  return data;
}
const getSingleSchedule = async (scheduleId) => {
  const response = await fetch(`${dbUrl}/schedules/${scheduleId}`);
  const data = response.json();

  // return data;
  return singleSchedule;
}

export { getSchedules, getSingleSchedule };
