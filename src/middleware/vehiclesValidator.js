const { authCreateVehicles, authUpdateVehicles } = require("../helpers/validationSchemas");

module.exports = async (req, res, next) => {
	try {
		if(req.method === "POST") {
			await authCreateVehicles.validateAsync(req.body);
			next();
		}
		if(req.method === "PATCH") {
			await authUpdateVehicles.validateAsync(req.body);
			next();
		}
	} catch(error) {
		res.status(400).send(error);
	}
};