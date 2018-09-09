const mongoose = require("mongoose");
const Event = require("../models/event");

const MLAB_URI = process.env.MLAB_URI;
console.log("MLAB_URI: ", MLAB_URI);
// const options = {
//   reconnectTries: Number.MAX_VALUE,
//   poolSize: 10
// };

mongoose
  .connect(
    MLAB_URI,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );
