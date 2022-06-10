const RentalServices = require('../services/RentalServices');

class RentalController {
  static async registeRental(req, res) {
    try {
      const rental = await RentalServices.create(req.body);
      res.status(201).send(rental);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = RentalController;
