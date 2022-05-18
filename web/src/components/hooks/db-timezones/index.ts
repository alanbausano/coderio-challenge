import { useMutation, useQuery, useQueryClient } from "react-query";
import { STRING_KEYS } from "../../../string-keys/string-keys";
import { DBTimezonesApi } from "./api";

const useDatabaseTimezones = (deleteConfirmationModal?: boolean) => {
  const queryClient = useQueryClient();

  const { data: databaseTimezones } = useQuery(
    STRING_KEYS.DATABASE_TIMEZONES,
    DBTimezonesApi.getDBTimezones
  );

  const { mutate } = useMutation(
    [STRING_KEYS.POST_TIMEZONE],
    DBTimezonesApi.createDBTimezone,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(STRING_KEYS.DATABASE_TIMEZONES);
      },

      onError: (err) => console.log(err),
    }
  );

  const { mutate: deleteTimezone } = useMutation(
    [STRING_KEYS.DELETE_TIMEZONE, deleteConfirmationModal],
    DBTimezonesApi.deleteDBTimezone,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(STRING_KEYS.DATABASE_TIMEZONES);
      },
      onError: (err) => console.log(err),
    }
  );

  return {
    createTimezone: mutate,
    databaseTimezones,
    deleteTimezone,
  };
};

export { useDatabaseTimezones };
