const NotFound = require('../errors/NotFound');
const { toQueryVehicle } = require('../helpers/Vehicles');
const CarRepository = require('../repository/CarRepository');

class CarServices {
  static async create(reqBody) {
    const record = await CarRepository.create(reqBody);
    return record;
  }

  static async findAllCars(query) {
    const regQuery = toQueryVehicle(query);
    const cars = await CarRepository.findCars(regQuery, query);
    if (!cars.docs.length) {
      throw new NotFound('Vehicle');
    }
    return cars;
  }

  static async findCarById(carId) {
    const car = await CarRepository.findCarById(carId);
    if (!car) {
      throw new NotFound(`ID: ${carId}`);
    }
    return car;
  }

  static async updateCar(carId, reqBody) {
    const updatedCar = await CarRepository.updateCar(carId, reqBody);
    if (!updatedCar) {
      throw new NotFound(`ID: ${carId}`);
    }
    return updatedCar;
  }

  static async updateAccessories(id, reqBody) {
    const updatedAccessorie = await CarRepository.updateAccessorie(id, reqBody);
    if (!updatedAccessorie) throw new NotFound(`ID: ${id}`);
    return updatedAccessorie;
  }

  static async deleteCar(carId) {
    const deletedCar = await CarRepository.deleteCar(carId);
    if (!deletedCar) {
      throw new NotFound(`ID: ${carId}`);
    }
  }
}

module.exports = CarServices;
