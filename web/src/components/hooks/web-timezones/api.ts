import axios from "axios";
import { timezonesWeb } from "../../constants/constants";

const getWebTimezones = async () => {
  const response = await axios.get(timezonesWeb);

  return response.data;
};

const getWebTimezone = async (timezone: string) => {
  const response = await axios.get(`${timezonesWeb + timezone}`);

  return response.data;
};

export const WebTimezonesApi = { getWebTimezones, getWebTimezone };
