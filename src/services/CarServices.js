const NotFound = require("../errors/NotFound");
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
		if(!car) {
			throw new NotFound(`ID: ${carId}`);
		}
		return car;
	}

	static async updateCar(carId, reqBody) {
		const updatedCar = await CarRepository.updateCar(carId, reqBody);
		if(!updatedCar) {
			throw new NotFound(`ID: ${carId}`);
		}
		return updatedCar;
	}

	static async deleteCar(carId) {
		const deletedCar = await CarRepository.deleteCar(carId);
		if(!deletedCar) {
			throw new NotFound(`ID: ${carId}`);
		}
	}
}

module.exports = CarServices;