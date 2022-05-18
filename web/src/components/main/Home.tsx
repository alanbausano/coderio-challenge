import { useTimezones } from "../hooks/web-timezones";
import { AutoComplete } from "primereact/autocomplete";
import { useEffect, useState } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { TimezonesDash } from "../timezones/Timezones";
import { useDatabaseTimezones } from "../hooks/db-timezones";
import { STRING_KEYS } from "../../string-keys/string-keys";

export const Home = () => {
  const { alltimezones, getWebTimezones, fetchedTimezone } = useTimezones();
  const [timezones, setTimezones] = useState<any>(null);
  const [filteredTimezones, setFilteredTimezones] = useState<any>(null);
  const { createTimezone } = useDatabaseTimezones();
  const [alltimezonesFetched, setAlltimzonesFetched] = useState([]);
  const [confirmationModal, setConfirmationModal] = useState(false);
  useEffect(() => {
    setAlltimzonesFetched(alltimezones);
  }, [alltimezones]);
  // options to suggest
  const searchTimezone = (event: { query: string }) => {
    setTimeout(() => {
      let _filteredTimezones;
      if (!event.query.trim().length) {
        _filteredTimezones = [...alltimezonesFetched];
      } else {
        _filteredTimezones = alltimezonesFetched?.filter((timezone: string) => {
          return timezone.toLowerCase().includes(event.query.toLowerCase());
        });
      }

      setFilteredTimezones(_filteredTimezones);
    }, 250);
  };

  const postToDB = () => {
    const postTimezoneData = {
      timezone: fetchedTimezone?.timezone,
      datetime: fetchedTimezone?.utc_datetime,
    };
    console.log(postTimezoneData);
    if (postTimezoneData.datetime !== undefined) {
      createTimezone(postTimezoneData);
    }
  };

  const handleTimezone = (tmz: string) => {
    getWebTimezones(tmz);
    setConfirmationModal(true);
  };

  const handleConfirmation = () => {
    postToDB();
    setConfirmationModal(false);
    setTimezones("");
  };

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => setConfirmationModal(false)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => handleConfirmation()}
          autoFocus
        />
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <h1>{STRING_KEYS.HOME_HEADER}</h1>
        <AutoComplete
          value={timezones}
          suggestions={filteredTimezones}
          completeMethod={searchTimezone}
          onChange={(e) => setTimezones(e.value)}
          onSelect={(e) => handleTimezone(e.value)}
          placeholder="Search timezones"
        />
      </div>
      <Dialog
        header={STRING_KEYS.CREATE_TIMEZONE_HEADER}
        visible={confirmationModal}
        position={"center"}
        modal
        style={{ width: "50vw" }}
        footer={renderFooter()}
        draggable={false}
        resizable={false}
        onHide={() => setConfirmationModal(false)}
      >
        <p className="m-0">{STRING_KEYS.CREATE_TIMEZONE_CONFIRM}</p>
      </Dialog>
      <TimezonesDash />
    </>
  );
};
