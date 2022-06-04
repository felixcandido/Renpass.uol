const CarRepository = require("../repository/CarRepository");

class CarServices {
	static async create(reqBody) {
		const record = await CarRepository.create(reqBody);
		return record;
	}
}

module.exports = CarServices;