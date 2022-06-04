const PersonController = require("../controllers/PersonController");

module.exports = (server, routes, prefix = "/api/v1/person") => {
	routes
		.post("/", PersonController.registePerson)
		.get("/", PersonController.findAllPeople)
		.get("/:personId", PersonController.findPersonById)
		.put("/:personId", PersonController.updatePerson)
		.delete("/:personId", PersonController.deletePerson);
		
	server.use(prefix, routes);
};
