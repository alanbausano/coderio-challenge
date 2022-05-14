const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timezoneModel = new Schema({
  timezone: {
    type: String,
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
});

// export = mongoose.model("Timezone", timezoneModel);

module.exports = mongoose.model("Timezone", timezoneModel);
