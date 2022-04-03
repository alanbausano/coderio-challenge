import express from "express";

const router = express.Router();
const {
  getTimezones,
  createTimezones,
  updateTimezones,
  deleteTimezone,
} = require("../controller/timezonesController");

router.get("/api", getTimezones);

router.post("/api", createTimezones);

router.put(`/api/:id`, updateTimezones);

router.delete(`/api/:id`, deleteTimezone);

export default router;
