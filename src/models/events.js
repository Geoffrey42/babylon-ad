const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  event_type: String
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
