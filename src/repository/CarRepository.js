const Vehicles = require("../models/vehiclesModel");

class CarRepository {
	static async create(reqBody) {
		const record = await Vehicles.create(reqBody);
		return record;
	}
	
	static async findCars() {
		const cars = await Vehicles.find();
		return cars;
	}

	static async findCarById(carId) {
		const car = await Vehicles.findById(carId);
		return car;
	}

	static async updateCar(carId, reqBody) {
		const updatedCar = await Vehicles.findByIdAndUpdate(carId, reqBody);
		console.log(updatedCar);
		return updatedCar;
	}

	static async deleteCar(carId) {
		const deletedCar = await Vehicles.findByIdAndDelete(carId);
		return deletedCar;
	}
}

module.exports = CarRepository;