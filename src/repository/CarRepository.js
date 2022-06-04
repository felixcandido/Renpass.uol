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
}

module.exports = CarRepository;