const BadRequest = require('../errors/BadRequest');
const Rental = require('../models/rentalModel');

class RentalRepository {
  static async create(reqBody) {
    return Rental.create(reqBody);
  }

  static async findAll(regQuery, query) {
    const { page = 1, limit = 20 } = query;
    return Rental.paginate(regQuery, { page, limit });
  }

  static async findById(id) {
    return Rental.findById(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }

  static async updateRental(id, reqBody) {
    const x = await Rental.findByIdAndUpdate(id, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
      if (error.codeName === 'DuplicateKey') throw new BadRequest(`CNPJ: ${reqBody.cnpj} already in use`);
    });
    return x;
  }

  static async delete(id) {
    return Rental.findByIdAndDelete(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }
}

module.exports = RentalRepository;
