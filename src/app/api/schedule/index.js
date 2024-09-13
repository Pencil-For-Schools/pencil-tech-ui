// import { schedules } from "@/utils/data/sample_schedules_response";
// import { singleSchedule } from "@/utils/data/singleSchedule";

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_API;

const getSchedules = async (monthId) => {
  const response = await fetch(`${dbUrl}/schedules?month=${monthId}`);
  const data = response.json();

  return data;
}
const getSingleSchedule = async (scheduleId) => {
//   // const response = await fetch(`${dbUrl}/schedules/${scheduleId}`);
//   // const data = response.json();

  return singleSchedule;
}

const cancelScheduledItem = async (schduleItemId) => {
  // const response = await fetch(`${dbUrl}/schedules/${schduleItemId}`);
  // const data = response.json();

  return true;
}

export { 
  getSchedules, 
  getSingleSchedule,
  cancelScheduledItem
};
