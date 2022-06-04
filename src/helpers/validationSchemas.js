const Joi = require("joi");

const authCreateVehicles = Joi.object({
	model: Joi.string().required(),
	type: Joi.string().required(),
	brand: Joi.string().required(),
	color: Joi.string().required(),
	year: Joi.number().required().min(1950).max(2022),
	accessories: Joi.array().required().min(1).unique(),
	passengersQtd: Joi.number().required().min(1)
});

const authUpdateVehicles = Joi.object({
	model: Joi.string(),
	type: Joi.string(),
	brand: Joi.string(),
	color: Joi.string(),
	year: Joi.number().min(1950).max(2022),
	accessories: Joi.array().min(1).unique(),
	passengersQtd: Joi.number().min(1)
});

module.exports = {
	authCreateVehicles,
	authUpdateVehicles
};