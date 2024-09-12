"use client"

import { useState } from "react";

const initialState = {
    email: "",
    firstName: "",
    lastName: "",
    school: "",
}

const sampleSchoolData = {
    date: "Janruary 21, 2024",
    time: "12:00 PM CST",
    location: "Nashville Pencil Box",
    numberOfSpots: 10
}

export default function Page() {
    const [email, setEmail] = useState(initialState.email)
    const [firstName, setFirstName] = useState(initialState.firstName)
    const [lastName, setLastName] = useState(initialState.lastName)
    const [loading, setLoading] = useState(true)
    const [school, setSchool] = useState(initialState.school)

    const resetForm = () => {
        setEmail(initialState.email)
        setFirstName(initialState.firstName)
        setLastName(initialState.lastName)
        setSchool(initialState.school)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("First Name", firstName)
        console.log("Last Name", lastName)
        console.log("Email", email);
        console.log("School", school);
        console.log("YOU SUBMITTED, YA FILTHY ANIMAL! We need an API");

        resetForm();
    }

    if (!loading) {
        return (
            <div className="flex flex-col gap-10 px-5 py-10">
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
        <div className="flex flex-col gap-10 px-5 py-10 relative z-[1000]">
            <h2 className="font-bold text-3xl">Confirm Time</h2>

            <div className="bg-white border flex flex-col gap-3 p-6 rounded-lg shadow-md">
                <p className="font-bold">{sampleSchoolData.date}</p>

                <div>
                    <p className="font-medium">Time: {sampleSchoolData.time}</p>
                    <p className="font-light">Location: {sampleSchoolData.location}</p>
                    <p className="font-bold">Available Spots: {sampleSchoolData.numberOfSpots}</p>
                </div>
            </div>

            <p>We could'nt find your email address.</p>

            <p className="text-xl">Register with us</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">School Name</label>
                    <select
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Select School</option>
                        <option value="School 1">School 1</option>
                        <option value="School 2">School 2</option>
                        {/* TODO: Connect to API Add more schools as needed */}
                    </select>
                </div>
                <div className="flex flex-col">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4 transition-colors"
                    >
                        Confirm
                    </button>

                    <button
                        type="button"
                        className="border border-red-500 flex-1 text-red-600 px-4 py-2 rounded-md hover:bg-red-200 transition-colors"
                    >
                        Cancel Time
                    </button>
                </div>
            </form>
        </div>
    )
}
