import { cancelScheduledItem } from "@/app/api/schedule";
import React from "react";

// TODO: ALL THE STUFF ON THE BOARD
export default async function CancellationPage({ params, searchParams }) {
  const data = await cancelScheduledItem(searchParams.id);

  return (
    <div>
      {data ? (
        <div className="flex flex-col items-center justify-center mt-[120px] relative z-[1000]">
          <div className="shadow-md bg-white/80 rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-2xl">Your reservation has been cancelled.</h2>
            <p className="pt-6">Feel free to sign up again in the future...</p>
            <p className="font-bold pt-8">The pencil team</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
