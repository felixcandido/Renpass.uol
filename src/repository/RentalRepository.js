const BadRequest = require('../errors/BadRequest');
const Rental = require('../models/rentalModel');
const customLabels = require('../helpers/paginateTemplate');

class RentalRepository {
  async create(reqBody) {
    return Rental.create(reqBody).catch((error) => {
      if (Object.keys(error.keyPattern)[0] === 'cnpj') throw new BadRequest(`CNPJ ${reqBody.cnpj} is already in use`);
    });
  }

  async findAll(regQuery, query) {
    const { offset = 0, limit = 100 } = query;

    const options = {
      page: offset,
      limit,
      customLabels: { ...customLabels, docs: 'rentals' }
    };
    return Rental.paginate(regQuery, options);
  }

  async findById(id) {
    return Rental.findById(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }

  async updateRental(id, reqBody) {
    const x = await Rental.findByIdAndUpdate(id, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
      if (Object.keys(error.keyPattern)[0] === 'cnpj') throw new BadRequest(`CNPJ ${reqBody.cnpj} is already in use`);
    });
    return x;
  }

  async delete(id) {
    return Rental.findByIdAndDelete(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
  }
}

module.exports = new RentalRepository();
