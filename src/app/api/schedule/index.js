// import { schedules } from "@/utils/data/sample_schedules_response";
import { singleSchedule } from "@/utils/data/singleSchedule";
import { schoolSelectData } from "@/components/SchoolsSelect/schoolSelectData";

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_API;

const getSchedules = async (monthId) => {
  const response = await fetch(`${dbUrl}/schedules?month=${monthId}`);
  const data = response.json();

  return data;
};

// TODO: switch this out for real API response
const getSingleSchedule = async (scheduleId) => {
  const response = await fetch(`${dbUrl}/schedules/${scheduleId}`);
  const data = response.json();

  return singleSchedule;
};

const cancelScheduledItem = async (schduleItemId) => {
  // const response = await fetch(`${dbUrl}/schedules/${schduleItemId}`);
  // const data = response.json();

  return true;
};

const getSchools = async () => {
  const response = await fetch(`${dbUrl}/schools`);
  const data = response.json();

  return schoolSelectData;

  // return data;
};

export { getSchedules, getSingleSchedule, cancelScheduledItem, getSchools };
