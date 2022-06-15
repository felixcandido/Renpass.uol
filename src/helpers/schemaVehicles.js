const Joi = require('joi');

const authCreateVehicles = Joi.object({
  model: Joi.string().required().trim(),
  type: Joi.string().required().trim(),
  brand: Joi.string().required().trim(),
  color: Joi.string().required().trim(),
  year: Joi.number().required().min(1950).max(2022),
  accessories: Joi.array().required().min(1).unique(),
  passengersQtd: Joi.number().required().min(1),
});

const authUpdateVehicles = Joi.object({
  model: Joi.string().trim(),
  type: Joi.string().trim(),
  brand: Joi.string().trim(),
  color: Joi.string().trim(),
  year: Joi.number().min(1950).max(2022),
  accessories: Joi.array().min(1).unique(),
  passengersQtd: Joi.number().min(1),
});

module.exports = {
  authCreateVehicles,
  authUpdateVehicles,
};
