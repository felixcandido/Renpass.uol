const Vehicles = require("../models/vehiclesModel");

class CarRepository {
	static async create(reqBody) {
		const record = await Vehicles.create(reqBody);
		return record;
	}
}

module.exports = CarRepository;