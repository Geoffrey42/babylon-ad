const assert = require("assert");
const MapEvent = require("../src/models/mapEvent");
const fs = require("fs");

describe("Create test", () => {
  it("GeoEvent saving", done => {
    rawJSON = fs.readFileSync("./src/assets/mini_events.json");
    const parsedContent = JSON.parse(rawJSON);
    const mapEvent = new MapEvent(parsedContent);
    mapEvent
      .save()
      .then(() => {
        assert(!mapEvent.isNew);
      })
      .catch(error => {
        console.error(error);
      });
    done();
  });
});
