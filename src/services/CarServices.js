const CarRepository = require("../repository/CarRepository");

class CarServices {
	static async create(reqBody) {
		const record = await CarRepository.create(reqBody);
		return record;
	}

	static async findAllCars() {
		const cars = await CarRepository.findCars();
		return cars;
	}
}

module.exports = CarServices;