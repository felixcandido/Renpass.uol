const FleetServices = require('../services/FleetServices');

class FleetController {
  static async createFleet(req, res) {
    try {
      const fleet = await FleetServices.create(req.body);
      res.status(201).send(fleet);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = FleetController;
