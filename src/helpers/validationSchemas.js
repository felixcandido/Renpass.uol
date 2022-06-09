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

const authCreatePerson = Joi.object({
  name: Joi.string().required().trim(),
  cpf: Joi.string()
    .required()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    .trim()
    .length(11)
    .length(14),
  birthDay: Joi.string().required().replace(/(\d{2})\/(\d{2})\/(\d{4})$/, '$3/$2/$1'),
  email: Joi.string().required().email().trim(),
  password: Joi.string().required().min(6),
  canDrive: Joi.string().valid('yes', 'no').required(),
});

const authUpdatePerson = Joi.object({
  name: Joi.string().trim(),
  cpf: Joi.string().replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    .trim()
    .length(11)
    .length(14),
  birthDay: Joi.string().replace(/(\d{2})\/(\d{2})\/(\d{4})$/, '$3/$2/$1'),
  email: Joi.string().email().trim(),
  password: Joi.string().min(6),
  canDrive: Joi.string().valid('yes', 'no'),
});

module.exports = {
  authCreateVehicles,
  authUpdateVehicles,
  authCreatePerson,
  authUpdatePerson,
};
