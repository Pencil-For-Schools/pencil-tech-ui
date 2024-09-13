'use client'

import React from "react";
import { schoolSelectData } from "./schoolSelectData";

export default function SchoolsSelect({ schoolId, setSchoolId }) {

  // TODO: make call to API /schools to get all the list of schools from DB

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
          <option>Select School</option>
          {schoolSelectData.map((school) => (
            <option key={school.id} value={school.id}>{school.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
