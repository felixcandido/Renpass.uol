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

const authCreatePerson = Joi.object({
	name: Joi.string().required(),
	cpf: Joi.string().required(),
	birthDay: Joi.string().required(),
	email: Joi.string().required().email(),
	password: Joi.string().required().min(6),
	canDrive: Joi.string().valid("yes", "no").required()
});

const authUpdatePerson = Joi.object({
	name: Joi.string(),
	cpf: Joi.string(),
	birthDay: Joi.string(),
	email: Joi.string().email(),
	password: Joi.string().min(6),
	canDrive: Joi.string().valid("yes", "no")
});

module.exports = {
	authCreateVehicles,
	authUpdateVehicles,
	authCreatePerson,
	authUpdatePerson
};