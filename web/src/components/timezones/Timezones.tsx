import { useDatabaseTimezones } from "../hooks/db-timezones";
import { Card } from "primereact/card";
import { STRING_KEYS } from "../../string-keys/string-keys";
import { Button } from "primereact/button";
import moment from "moment";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export const TimezonesDash = () => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] =
    useState<boolean>(false);
  const { databaseTimezones, deleteTimezone, isLoading } = useDatabaseTimezones(
    deleteConfirmationModal
  );
  const [deleteSelectedTimezone, setDeleteSelectedTimezone] =
    useState<number>(0);

  const handleDelete = () => {
    deleteTimezone(deleteSelectedTimezone);
    setDeleteConfirmationModal(false);
  };

  const handleDeleteConfirmationModal = (timezone: number) => {
    setDeleteConfirmationModal(true);
    setDeleteSelectedTimezone(timezone);
  };
  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => setDeleteConfirmationModal(false)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => handleDelete()}
          autoFocus
        />
      </div>
    );
  };
  return (
    <>
      {databaseTimezones?.length ? (
        <div className="cards-container">
          {databaseTimezones?.map((t: any) => (
            <Card
              title={t.timezone}
              style={{ width: "25rem", marginBottom: "2em" }}
              key={t._id}
            >
              <p className="m-0" style={{ lineHeight: "1.5" }}>
                {t?.timezone}
              </p>
              <p className="m-0" style={{ lineHeight: "1.5" }}>
                {moment(t?.datetime).format("YYYY/MM/DD")}
              </p>
              <p className="m-0" style={{ lineHeight: "1.5" }}>
                {new Date(t?.datetime).toUTCString()}
              </p>
              <Button onClick={() => handleDeleteConfirmationModal(t._id)}>
                {STRING_KEYS.DELETE_TIMEZONE_BUTTON}
              </Button>
            </Card>
          ))}
          <Dialog
            header={STRING_KEYS.CREATE_TIMEZONE_HEADER}
            visible={deleteConfirmationModal}
            position={"center"}
            modal
            style={{ width: "50vw" }}
            footer={() => renderFooter()}
            draggable={false}
            resizable={false}
            onHide={() => setDeleteConfirmationModal(false)}
          >
            <p className="m-0">{STRING_KEYS.DELETE_TIMEZONE_CONFIRM}</p>
          </Dialog>{" "}
        </div>
      ) : (
        <div style={{ display: "flex", width: "100%" }}>
          {isLoading ? (
            <>
              <ProgressSpinner />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <h2>{STRING_KEYS.EMPTY_TIMEZONES}</h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};
