const assert = require("assert");
const MapEvent = require("../src/models/mapEvents");
const fs = require("fs");

describe("Create test", () => {
  it("MapEvent saving", done => {
    rawJSON = fs.readFileSync("./src/assets/test_assets/create_test.json");
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
