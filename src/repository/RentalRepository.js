const Rental = require('../models/rentalModel');

class RentalRepository {
  static async create(reqBody) {
    return Rental.create(reqBody);
  }
}

module.exports = RentalRepository;
