const BadRequest = require('../errors/BadRequest');
const Vehicles = require('../models/vehiclesModel');

class CarRepository {
  static async create(reqBody) {
    const record = await Vehicles.create(reqBody);
    return record;
  }

  static async findCars(RegQuery, query) {
    const { page = 1, limit = 20 } = query;
    return Vehicles.paginate(RegQuery, { page, limit });
  }

  static async findCarById(carId) {
    const car = await Vehicles.findById(carId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return car;
  }

  static async updateCar(carId, reqBody) {
    const updatedCar = await Vehicles.findByIdAndUpdate(carId, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return updatedCar;
  }

  static async updateAccessorie(id, reqBody) {
    const accessorie = await Vehicles.findOneAndUpdate(
      { 'accessories._id': id },
      { $set: { 'accessories.$.description': reqBody.description } },
    );
    return accessorie;
  }

  static async deleteCar(carId) {
    const deletedCar = await Vehicles.findByIdAndDelete(carId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return deletedCar;
  }
}

module.exports = CarRepository;
