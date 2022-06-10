const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  static async create(reqBody) {
    const rental = await RentalRepository.create(reqBody);
    return rental;
  }
}

module.exports = RentalServices;
