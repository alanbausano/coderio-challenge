import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../../../query-keys/query-keys";
import { TimezonesApi } from "./api";

const onError = () => {
  alert("Error al obtener timezones");
};

const useTimezones = () => {
  const { data: allTimezones } = useQuery(
    [QUERY_KEYS.TIMEZONES],
    TimezonesApi.getAllTimezones,
    {
      onError,
    }
  );

  const { mutate } = useMutation(
    [QUERY_KEYS.TIMEZONES],
    TimezonesApi.getTimezone,
    {
      onError,
    }
  );

  return {
    getTimezone: mutate,
    allTimezones,
  };
};

export { useTimezones };
