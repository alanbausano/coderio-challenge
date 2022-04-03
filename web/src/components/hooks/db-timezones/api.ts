import axios from "axios";

const getAllTimezonesFromDB = async () => {
  const result = await axios.get(`http://localhost:5000/api`);
  console.log(result.data);
  return result.data;
};

const postTimezoneToDB = async (area?: string) => {
  const result = await axios.get(
    `http://worldtimeapi.org/api/timezone/${area}`
  );
  console.log(result.data);
  return result.data;
};

export const TimezonesDBApi = { getAllTimezonesFromDB, postTimezoneToDB };
