const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  static async create(reqBody) {
    const rental = await RentalRepository.create(reqBody);
    return rental;
  }

  static async findRental(reqBody) {
    const rental = await RentalRepository.findAll(reqBody);
    return rental;
  }

  static async findById(id) {
    const result = await RentalRepository.findById(id);
    return result;
  }

  static async updateRental(id, reqBody) {
    await RentalRepository.updateRental(id, reqBody);
  }

  static async deleteRental(id) {
    await RentalRepository.delete(id);
  }
}

module.exports = RentalServices;
