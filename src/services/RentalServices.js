const NotFound = require('../errors/NotFound');
const findAdress = require('../helpers/Address');
const { toQueryRental } = require('../helpers/Rental');
const RentalRepository = require('../repository/RentalRepository');

class RentalServices {
  static async create(reqBody) {
    const data = await findAdress(reqBody);
    const rental = await RentalRepository.create(data);
    return rental;
  }

  static async findRental(query) {
    const Regquery = toQueryRental(query);
    const rental = await RentalRepository.findAll(Regquery, query);
    if (!rental.docs.length) throw new NotFound(query);
    return rental;
  }

  static async findById(id) {
    const result = await RentalRepository.findById(id);
    if (!result) throw new NotFound(`ID: ${id}`);
    return result;
  }

  static async updateRental(id, reqBody) {
    const updatedRental = await RentalRepository.updateRental(id, reqBody);
    if (!updatedRental) throw new NotFound(`ID: ${id}`);
  }

  static async deleteRental(id) {
    const deletedRental = await RentalRepository.delete(id);
    if (!deletedRental) throw new NotFound(`ID: ${id}`);
  }
}

module.exports = RentalServices;
