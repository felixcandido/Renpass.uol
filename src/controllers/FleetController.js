const FleetServices = require('../services/FleetServices');

class FleetController {
  async createFleet(req, res) {
    try {
      const fleet = await FleetServices.create(req.body);
      res.status(201).send(fleet);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async findFleet(req, res) {
    try {
      const fleet = await FleetServices.findFleet();
      res.status(200).send(fleet);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async findFleetById(req, res) {
    try {
      const fleet = await FleetServices.findFleetById(req.params.fleetId);
      res.status(200).send(fleet);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async updateFleet(req, res) {
    try {
      await FleetServices.updateFleet(req.params.fleetId, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteFleet(req, res) {
    try {
      await FleetServices.deleteFleet(req.params.fleetId);
      res.status(204).end();
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = new FleetController();
