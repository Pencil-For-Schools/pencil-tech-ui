import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";

// TODO: GET THE RIGHT DATA FOR THIS
const constantData = {
  email: "email@pencilbox.com",
  phoneNumber: "###-###-####",
  questionOrConcern: "If you have any questions or concerns please contact Pencil Box:",
  reminder: "You will receive an email 24 hours before your scheduled time for self-check in to start your shopping process.",
  thanks: "Thanks for signing up.",
}

export default function ConfirmedDetailsComp({ scheduleItem }) {
  return (
    <>
      <div className="flex gap-5 items-center mb-10">
        <p className="font-bold text-3xl">Time Confirmed</p>
        <CheckIcon className="bg-green-700 h-8 p-1 rounded-full text-white/90" />
      </div>
      <div className="p-6 rounded-md mb-6 bg-black">
        <p className="font-bold text-2xl font-bold text-white">
          {scheduleItem.date}
        </p>
        <p className="text-lg text-white">Time: {scheduleItem.time}</p>
        <p className="text-lg text-white">
          Location: {scheduleItem?.location?.loc}
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
  );
}
