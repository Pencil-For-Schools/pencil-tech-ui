import { schedules } from "@/utils/data/sample_schedules_response";

const dbUrl = 'http://localhost:8000/api';

const getSchedules = async (monthId) => {
  const response = await fetch(`${dbUrl}/schedules?month=${monthId}`);
  const data = response.json();

  return data;
}

export { getSchedules };
