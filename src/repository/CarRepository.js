const Vehicles = require("../models/vehiclesModel");

class CarRepository {
	static async create(reqBody) {
		const record = await Vehicles.create(reqBody);
		return record;
	}
	
	static async findCars(RegQuery, query) {
		const {page = 1, limit = 20} = query;
		const cars = await Vehicles.find(RegQuery).limit(limit * 1).skip((page - 1) * limit);
		const count = await Vehicles.countDocuments(RegQuery);
		return {
			cars,
			totalPages: Math.ceil(count / limit),
			currentPage: page
		};
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