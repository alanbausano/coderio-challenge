import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../../../query-keys/query-keys";
import { WebTimezonesApi } from "./api";

// const onSuccess = () => {
//   console.log(data);
// };

const useTimezones = () => {
  const { mutate, data, isLoading } = useMutation(
    [QUERY_KEYS.TIMEZONES],
    WebTimezonesApi.getWebTimezone,
    {
      onSuccess: (data) => console.log(data, "desde usemutation"),
      onError: (err) => console.log(err),
    }
  );

  const { data: alltimezones } = useQuery(
    "all timezones",
    WebTimezonesApi.getWebTimezones,
    {
      onSuccess: (data) => console.log(data, "desde usequery"),
      onError: (err) => console.log(err, "desde usequery error"),
    }
  );

  return {
    fetchedTimezone: data,
    isLoading,
    alltimezones,
    getWebTimezones: mutate,
  };
};

export { useTimezones };
