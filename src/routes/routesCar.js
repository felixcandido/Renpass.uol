const CarController = require("../controllers/CarController");

module.exports = (server, routes, prefix = "/api/v1/car") => {
	routes
		.post("/", CarController.registeCar)
		.get("/", CarController.findAllCars)
		.get("/:CarId", CarController.findCarById)
		.put("/:CarId", CarController.updateCar)
		.delete("/:CarId", CarController.deleteCar);
		
	server.use(prefix, routes);
};
