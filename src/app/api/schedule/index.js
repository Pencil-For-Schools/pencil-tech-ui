"use server";

import { redirect } from "next/navigation";

const dbUrl = process.env.NEXT_PUBLIC_DATABASE_API;

const getSchedules = async (monthId) => {
  const response = await fetch(`${dbUrl}/schedules?month=${monthId}`);
  const schedules = await response.json();

  return schedules;
};

// TODO: switch this out for real API response
const getSingleSchedule = async (scheduleId) => {
  const response = await fetch(`${dbUrl}/schedules/${scheduleId}`);
  const singleSchedule = await response.json();

  return singleSchedule;
};

const cancelScheduledItem = async (schduleItemId) => {
  // const response = await fetch(`${dbUrl}/schedules/${schduleItemId}`);
  // const data = response.json();

  return true;
};

const getSchools = async () => {
  const response = await fetch(`${dbUrl}/schools`);
  const schools = await response.json();

  return schools;
};

const registerToShop = async ({ email, schoolId }) => {
  // const response = await fetch(`${dbUrl}/register`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email,
  //     school_id: schoolId,
  //   }),
  // });

  // const { message, teacher_id, schedule_item_id } = await response.json();

  // if (message === TEACHER_NOT_YET_SCHEDULED) {
  //   redirect("/register-to-shop/teacher-info");
  // }
  redirect(
    `/register-to-shop/teacher-info?email=${email}&school_id=${schoolId}&teacher_id=${3}&schedule_item_id=${5}`
  );
  return;
  // return response.json();
};

const createScheduleItemTeacher = async ({
  scheduleItemId,
  firstName,
  lastName,
  email,
  phone,
  teacherId,
  schoolId,
}) => {
  // const response = await fetch(
  //   `${dbUrl}/schedules/${scheduleItemId}/new_teacher`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       phone,
  //       first_name: firstName,
  //       last_name: lastName,
  //       teacher_id: teacherId,
  //       school_id: schoolId,
  //     }),
  //   }
  // );

  // return response.json();
  return;
};

const getLocations = async () => {
  const response = await fetch(`${dbUrl}/locations`);
  // const locations = await response.json();

  const locations = [
    {
      id: 1,
      name: "Nashville",
    },
    {
      id: 2,
      name: "Antioch",
    },
  ];

  return locations;
};

const createShoppingOrder = ({ pencilId }) => {
  // const response = await fetch(`${dbUrl}/shopping/start/${pencilId}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const { order_id, message } = await response.json();

  // return order_id;
  return {
    message: "ORDER_CREATED",
    order_id: 5,
  };
};

const finalizeOrder = async (cart) => {
  // const response = await fetch(`${dbUrl}/shopping/checkout`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //     body: JSON.stringify(cart),
  // });

  // return response.json();
  return;
};

export {
  getSchedules,
  getSingleSchedule,
  cancelScheduledItem,
  getSchools,
  registerToShop,
  createScheduleItemTeacher,
  getLocations,
  createShoppingOrder,
  finalizeOrder,
};
