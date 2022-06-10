const Rental = require('../models/rentalModel');

class RentalRepository {
  static async create(reqBody) {
    return Rental.create(reqBody);
  }

  static async findAll(reqBody) {
    return Rental.find(reqBody);
  }

  static async findById(id) {
    return Rental.findById(id);
  }

  static async updateRental(id, reqBody) {
    return Rental.findByIdAndUpdate(id, reqBody);
  }

  static async delete(id) {
    return Rental.findByIdAndDelete(id);
  }
}

module.exports = RentalRepository;
