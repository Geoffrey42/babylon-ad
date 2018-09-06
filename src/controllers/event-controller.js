const Event = require("../models/event");

module.exports = {
  readAll(req, res) {
    Event.find()
      .then(results => {
        res.send(results);
      })
      .catch(error => {
        res.status(404).send({
          message: "Events not found : " + error
        });
      });
  },
  readById(req, res) {
    Event.findOne({ _id: req.params.id })
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.status(404).send({
          message: "Event not found : " + error
        });
      });
  },
  create(req, res) {
    const event = new Event({
      lat: req.body.lat,
      lon: req.body.lon,
      event_type: req.body.event_type
    });
    event
      .save()
      .then(result => {
        res.send({ result, message: "Event recorded successfully !" });
      })
      .catch(error => {
        res.status(500).send({
          message: "Event has not been recorded because " + error
        });
      });
  },
  delete(req, res) {
    Event.findByIdAndRemove(req.params.id).then(result => {
      if (!result) {
        return res.status(500).send({
          message: "Event not found with id " + req.params.id
        });
      }
      res.send({ message: "Event deleted successfully !" });
    });
  }
};
