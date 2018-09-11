const assert = require("assert");
const MapEvent = require("../src/models/mapEvents");
const fs = require("fs");

describe("Read test", () => {
  // create new room collection because collection is drop between each file
  beforeEach(done => {
    rawJSON = fs.readFileSync("./src/assets/test_assets/read_test.json");
    const parsedContent = JSON.parse(rawJSON);
    const mapEvent = new MapEvent(parsedContent);
    mapEvent
      .save()
      .then(() => {
        done();
      })
      .catch(error => {
        console.error(error);
      });
  });

  it("Find nearest event by coordonates", done => {
    const distance = 1000;
    const lat = 48.86;
    const lon = 2.35;

    MapEvent.findOne({
      geometry: {
        $near: [lat, lon],
        $maxDistance: distance
      }
    })
      .then(nearestResult => {
        console.log("------------");
        console.log(nearestResult);
        console.log("------E-----");
        done();
      })
      .catch(error => {
        console.error("************");
        console.error(error);
        console.error("******E*****");
      });
  });
});
