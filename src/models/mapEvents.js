const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
  type: String,
  geometry: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number] }
  },
  properties: { event_type: String }
});

FeatureSchema.index({ geometry: "2dsphere" });
const MapEventSchema = new mongoose.Schema({
  type: String,
  features: [FeatureSchema]
});

const MapEvent = mongoose.model("mapEvent", MapEventSchema);

module.exports = MapEvent;
