import { useTimezones } from "../hooks/web-timezones";
import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";

export const Home = () => {
  const { allTimezones, getTimezone } = useTimezones();
  const [timezones, setTimezones] = useState(allTimezones);
  const [filteredTimezones, setFilteredTimezones] = useState<any>(null);

  const searchCountry = (event: { query: string }) => {
    let _filteredTimezones;
    if (!event.query.trim().length) {
      _filteredTimezones = [...allTimezones];
    } else {
      _filteredTimezones = allTimezones.filter((timezone: string) => {
        return timezone.toLowerCase().includes(event.query.toLowerCase());
      });
    }

    setFilteredTimezones(_filteredTimezones);
  };

  const handleTimezone = (valor: string) => {
    getTimezone(valor);
  };

  return (
    <>
      <AutoComplete
        value={timezones}
        suggestions={filteredTimezones}
        completeMethod={searchCountry}
        onChange={(e) => setTimezones(e.value)}
        onSelect={(e) => handleTimezone(e.value)}
      />
      
    </>
  );
};
