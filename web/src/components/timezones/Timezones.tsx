import { useDatabaseTimezones } from "../hooks/db-timezones";
import { Card } from "primereact/card";

// import { useDBTimezones } from "../hooks/db-timezones";
// const itemTemplate = () => {
//   if (!timezonesDB) {
//     return "There are no timezones added yet, search for one";
//   }
//   if (timezonesDB) {
//     return renderGridItem;
//   }
// };
export const TimezonesDash = () => {
  const { databaseTimezones } = useDatabaseTimezones();
  console.log(
    databaseTimezones?.map((t: any) => t?.datetime),
    "desde cards timezones"
  );

  return (
    <>
      {databaseTimezones?.map((t: any) => (
        <Card
          title="Simple Card"
          style={{ width: "25rem", marginBottom: "2em" }}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            {t?.timezone}
          </p>
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            {t?.datetime}
          </p>
        </Card>
      ))}
    </>
  );
};
