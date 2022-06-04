const CarServices = require("../services/CarServices");

class CarController{
	static async registeCar(req, res) {
		try {
			const result = await CarServices.create(req.body);
			res.status(200).send(result);
		} catch(error) {
			res.status(400).send(error);
		}
	}

	static async findAllCars(req, res) {
		try {
			const result = await CarServices.findAllCars();
			res.status(200).send(result);
		} catch(error) {
			res.status(400).send(error);
		}
	}
}

module.exports = CarController;