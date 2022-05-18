import axios from "axios";
import { Timezones } from "../../../types/types";
import { timezonesDB } from "../../constants/constants";

const getDBTimezones = async () => {
  const response = await axios.get(timezonesDB);

  return response.data;
};

const createDBTimezone = async (timezone: Timezones) => {
  const response = await axios.post(timezonesDB, timezone);

  return response.data;
};

const deleteDBTimezone = async (id: number) => {
  const response = await axios.delete(`${timezonesDB}/${id}`);

  console.log(response.data);
  return response.data;
};

export const DBTimezonesApi = {
  getDBTimezones,
  createDBTimezone,
  deleteDBTimezone,
};
