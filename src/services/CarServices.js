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

	static async findCarById(carId) {
		const car = await CarRepository.findCarById(carId);
		return car;
	}

	static async updateCar(carId, reqBody) {
		const updatedCar = await CarRepository.updateCar(carId, reqBody);
		return updatedCar;
	}

	static async deleteCar(carId) {
		await CarRepository.deleteCar(carId);
	}
}

module.exports = CarServices;