const RentalServices = require('../services/RentalServices');

class RentalController {
  async registeRental(req, res) {
    try {
      const rental = await RentalServices.create(req.body);
      res.status(201).send(rental);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async findRental(req, res) {
    try {
      const result = await RentalServices.findRental(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async findRentalbyId(req, res) {
    try {
      const result = await RentalServices.findById(req.params.id);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async updateRental(req, res) {
    try {
      await RentalServices.updateRental(req.params.id, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async deleteRental(req, res) {
    try {
      await RentalServices.deleteRental(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }
}

module.exports = new RentalController();
