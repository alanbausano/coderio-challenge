import express from "express";

const router = express.Router();
const {
  getTimezones,
  createTimezones,
  updateTimezones,
  deleteTimezone,
} = require("../controller/timezonesController");

router.get("/api/timezones", getTimezones);

router.post("/api/timezones", createTimezones);

router.put(`/api/timezones/:id`, updateTimezones);

router.delete(`/api/timezones/:id`, deleteTimezone);

export default router;
