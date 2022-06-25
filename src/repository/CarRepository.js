const BadRequest = require('../errors/BadRequest');
const customLabels = require('../helpers/paginateTemplate');
const Vehicles = require('../models/vehiclesModel');

class CarRepository {
  async create(reqBody) {
    const record = await Vehicles.create(reqBody);
    return record;
  }

  async findCars(RegQuery, query) {
    const { offset = 0, limit = 100 } = query;

    const options = {
      page: offset,
      limit,
      customLabels: { ...customLabels, docs: 'vehicles' }
    };
    return Vehicles.paginate(RegQuery, options);
  }

  async findCarById(carId) {
    const car = await Vehicles.findById(carId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return car;
  }

  async updateCar(carId, reqBody) {
    const updatedCar = await Vehicles.findByIdAndUpdate(carId, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return updatedCar;
  }

  async updateAccessorie(id, reqBody) {
    const accessorie = await Vehicles.findOneAndUpdate(
      { 'accessories._id': id },
      { $set: { 'accessories.$.description': reqBody.description } }
    ).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });

    return accessorie;
  }

  async deleteCar(carId) {
    const deletedCar = await Vehicles.findByIdAndDelete(carId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return deletedCar;
  }
}

module.exports = new CarRepository();
