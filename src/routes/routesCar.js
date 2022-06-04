const CarController = require("../controllers/CarController");

module.exports = (server, routes, prefix = "/api/v1/car") => {
	routes.post("/", CarController.registeCar);
	server.use(prefix, routes);
};
