const mongoose = require("mongoose");

const MLAB_URI = process.env.MLAB_URI;

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
