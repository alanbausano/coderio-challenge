import { useMutation, useQuery } from "react-query";
import { STRING_KEYS } from "../../../string-keys/string-keys";
import { WebTimezonesApi } from "./api";

const useTimezones = () => {
  const { mutate, data, isLoading } = useMutation(
    [STRING_KEYS.TIMEZONE],
    WebTimezonesApi.getWebTimezone,
    {
      onError: (err) => console.log(err),
    }
  );

  const { data: alltimezones } = useQuery(
    [STRING_KEYS.ALL_WEB_TIMEZONES],
    WebTimezonesApi.getWebTimezones,
    {
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
