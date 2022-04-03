import axios from "axios";

const getAllTimezones = async () => {
  const result = await axios.get(`http://worldtimeapi.org/api/timezone`);
  console.log(result.data);
  return result.data;
};

const getTimezone = async (area?: string) => {
  const result = await axios.get(
    `http://worldtimeapi.org/api/timezone/${area}`
  );
  console.log(result.data);
  return result.data;
};

export const TimezonesApi = { getTimezone, getAllTimezones };
