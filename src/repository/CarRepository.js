const Vehicles = require("../models/vehiclesModel");

class CarRepository {
	static async create(reqBody) {
		const record = await Vehicles.create(reqBody);
		return record;
	}
	
	static async findCars(query) {
		const cars = await Vehicles.find(query);
		return cars;
	}

	static async findCarById(carId) {
		const car = await Vehicles.findById(carId);
		return car;
	}

	static async updateCar(carId, reqBody) {
		const updatedCar = await Vehicles.findByIdAndUpdate(carId, reqBody);
		return updatedCar;
	}

	static async deleteCar(carId) {
		const deletedCar = await Vehicles.findByIdAndDelete(carId);
		return deletedCar;
	}
}

module.exports = CarRepository;