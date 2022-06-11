const BadRequest = require('../errors/BadRequest');
const Rental = require('../models/rentalModel');

class RentalRepository {
  static async create(reqBody) {
    return Rental.create(reqBody);
  }

  static async findAll(reqQuery) {
    return Rental.find(reqQuery);
  }

  static async findById(id) {
    return Rental.findById(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }

  static async updateRental(id, reqBody) {
    return Rental.findByIdAndUpdate(id, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }

  static async delete(id) {
    return Rental.findByIdAndDelete(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }
}

module.exports = RentalRepository;
