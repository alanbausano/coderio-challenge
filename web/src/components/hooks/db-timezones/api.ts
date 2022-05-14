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

export const DBTimezonesApi = { getDBTimezones, createDBTimezone };
