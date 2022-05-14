import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../../../query-keys/query-keys";
import { DBTimezonesApi } from "./api";

const useDatabaseTimezones = () => {
  const { mutate } = useMutation(
    [QUERY_KEYS.TIMEZONES],
    DBTimezonesApi.createDBTimezone,
    {
      onSuccess: (data) => console.log(data),
      onError: (err) => console.log(err),
    }
  );

  const { data: databaseTimezones } = useQuery(
    "db timezones",
    DBTimezonesApi.getDBTimezones
  );

  return {
    createTimezone: mutate,
    databaseTimezones,
  };
};

export { useDatabaseTimezones };
