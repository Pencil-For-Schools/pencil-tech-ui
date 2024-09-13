"use client";

import React, { useEffect } from "react";
import { getSchools } from "@/app/api/schedule";

export default function SchoolsSelect({ schoolId, setSchoolId }) {
  const [schoolList, setSchoolList] = React.useState([]);

  useEffect(() => {
    getSchools().then(setSchoolList);
  }, []);

  return (
    <div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          School Name
        </label>
        <select
          value={schoolId}
          onChange={(e) => setSchoolId(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option disabled>Select School</option>
          {schoolList.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
