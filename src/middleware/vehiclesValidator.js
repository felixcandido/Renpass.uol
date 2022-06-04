const { validateVehicles } = require("../helpers/validationSchemas");

module.exports = async (req, res, next) => {
	try {
		await validateVehicles.validateAsync(req.body);
		next();
	} catch(error) {
		res.status(400).send(error);
	}
};