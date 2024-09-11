"use client"

import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const sampleData = {
    day: 21,
    location: "Nashville Pencil Box",
    month: "January",
    time: "12:00 PM CST",
    year: 2025
}

const constantData = {
    email: "email@pencilbox.com",
    phoneNumber: "###-###-####",
    questionOrConcern: "If you have any questions or concerns please contact Pencil Box:",
    reminder: "You will receive an email 24 hours before your scheduled time for self-check in to start your shopping process.",
    thanks: "Thanks for signing up.",
}


export default function Page() {
    const [loading, setLoading] = useState(true)

    // Background color can be set from the layout.tsx
    if (!loading) {
        return (
            <div className="flex flex-col gap-10 px-5 py-10">
                <p className="font-bold text-3xl">Finalizing...</p>
                {/* Reusing spinner component from inventory list */}
                <div className="flex items-center justify-center bg-gray-100">
                    <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
                </div>
                {/* End */}
            </div>
        );
    }

    return (
        // Reusable header will go here for the layout
        <div className="flex flex-col font-sans gap-10 md:items-center px-5 py-10">
            <div className="flex gap-5 items-center">
                <p className="font-bold text-3xl">Time Confirmed!</p>
                <CheckIcon className="bg-green-700 h-6 p-1 rounded-full text-white/90 w-6" />
            </div>

            <div className="bg-black md:w-[400px] p-5 rounded-lg shadow-md space-y-1 text-white/90">
                <p className="font-bold text-xl">{sampleData.month} {sampleData.day}, {sampleData.year}</p>
                <p className="font-bold">Time: {sampleData.time}</p>
                <p>Location: {sampleData.location}</p>
            </div>

            <p className="font-semibold text-2xl">{constantData.thanks}</p>
            <p className="font-medium text-xl">{constantData.reminder}</p>
            <p className="text-black/50 font-light">{constantData.questionOrConcern} {constantData.email} or {constantData.phoneNumber}</p>
        </div >
    )
}
