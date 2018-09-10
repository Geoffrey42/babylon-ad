const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  type: String,
  geometry: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number] }
  },
  properties: { event_type: String }
});

const MapEventSchema = new mongoose.Schema({
  type: String,
  features: [FeatureSchema]
});

const MapEvent = mongoose.model("MapEvent", MapEventSchema);

module.exports = MapEvent;
