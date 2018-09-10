EventController = require("../controllers/event-controller");

module.exports = server => {
  server.get("/api/events", EventController.readAll);
  server.get("/api/events/:id", EventController.readById);

  server.post("/api/event", EventController.create);
  server.delete("/api/event/:id", EventController.delete);
};
