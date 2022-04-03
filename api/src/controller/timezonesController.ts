const Timezone = require("../models/timezonesModel");
const asyncHandler = require("express-async-handler");

const getTimezones = asyncHandler(async (req: any, res: any) => {
  const models = await Timezone.find();
  // res.send('get timezones')
  res.status(200).json(models);
});

const createTimezones = asyncHandler(async (req: any, res: any) => {
  console.log(req.body);
  const timezone = await Timezone.create({
    timezone: req.body.timezone,
  });
  res.status(200).json(timezone);
});

const updateTimezones = asyncHandler(async (req: any, res: any) => {
  const timezone = await Timezone.findById(req.params.id);
  if (!timezone) {
    res.status(400);
    throw new Error("Timezone not found");
  }
  const updatedTimezone = await Timezone.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedTimezone);
});

const deleteTimezone = asyncHandler(async (req: any, res: any) => {
  const timezone = await Timezone.findById(req.params.id);
  if (!timezone) {
    res.status(400);
    throw new Error("Timezone not found");
  }
  await timezone.remove();
  res.status(200).json({ id: req.params.id });
});

export = { getTimezones, createTimezones, updateTimezones, deleteTimezone };
