const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;
const MLAB_URI = process.env.MLAB_URI;

before(done => {
  mongoose.connect(
    MLAB_URI,
    { useNewUrlParser: true }
  );

  mongoose.connection
    .once("open", () => {
      console.log("Connection is established");
      done();
    })
    .on("error", error => {
      console.warn("Error during connection : ", error);
    });
});

beforeEach("Delete mapEvents", done => {
  const { mapevents } = mongoose.connection.collections;
  mapevents.drop(() => {
    done();
  });
});
