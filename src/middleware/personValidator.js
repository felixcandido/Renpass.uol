const { authCreatePerson, authUpdatePerson  } = require("../helpers/validationSchemas");

module.exports = async (req, res, next) => {
	try {
		if(req.method === "POST") {
			await authCreatePerson.validateAsync(req.body);
			next();
		}
		if(req.method === "PATCH") {
			await authUpdatePerson.validateAsync(req.body);
			next();
		}
	} catch(error) {
		res.status(400).send(error);
	}
};