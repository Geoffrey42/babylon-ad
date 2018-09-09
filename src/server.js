const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");

require("dotenv").config();

const PORT = process.env.PORT;
const server = express();
require("./utils/db");

server.use(morgan("combined"));
server.use(bodyParser.json());
server.use(cors());
routes(server);

server.listen(PORT || 8081, () => {
  console.log("Server running at http://localhost:", PORT);
});
