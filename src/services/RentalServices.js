const NotFound = require('../errors/NotFound');
const findAdress = require('../helpers/Address');
const { toQueryRental } = require('../helpers/Rental');
const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  async create(reqBody) {
    const data = await findAdress(reqBody);
    const rental = await RentalRepository.create(data);
    return rental;
  }

  async findRental(query) {
    const Regquery = toQueryRental(query);
    const rental = await RentalRepository.findAll(Regquery, query);
    if (!rental.rentals.length) throw new NotFound('Rental');
    return rental;
  }

  async findById(id) {
    const result = await RentalRepository.findById(id);
    if (!result) throw new NotFound(`ID: ${id}`);
    return result;
  }

  async updateRental(id, reqBody) {
    const updatedRental = await RentalRepository.updateRental(id, reqBody);
    if (!updatedRental) throw new NotFound(`ID: ${id}`);
  }

  async deleteRental(id) {
    const deletedRental = await RentalRepository.delete(id);
    if (!deletedRental) throw new NotFound(`ID: ${id}`);
  }
}

module.exports = new RentalServices();
