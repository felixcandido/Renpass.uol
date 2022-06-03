const { Router } = require("express");
const routesCar = require("./routesCar");

module.exports = (server) => {
	server.use((req, res, next) => {
		routesCar(server, new Router());
		next();
	});
};