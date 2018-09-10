const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

before(done => {
  const MLAB_URI = process.env.MLAB_URI;
  console.log("MLAB_URI: ", MLAB_URI);

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
