const Joi = require('joi');
const { PERSON_CAN_DRIVE } = require('../helpers/ENUMS');

const authCreatePerson = Joi.object({
  name: Joi.string().trim().required(),
  cpf: Joi.string()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    .trim()
    .length(11)
    .length(14)
    .required(),
  birthDay: Joi.string().pattern(/(\d{2})\/(\d{2})\/(\d{4})$/).required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
  canDrive: Joi.string().valid(...Object.values(PERSON_CAN_DRIVE)).required(),
});

const authUpdatePerson = Joi.object({
  name: Joi.string().trim(),
  cpf: Joi.string().replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    .trim()
    .length(11)
    .length(14),
  birthDay: Joi.string().pattern(/(\d{2})\/(\d{2})\/(\d{4})$/),
  email: Joi.string().email().trim(),
  password: Joi.string().min(6),
  canDrive: Joi.string().valid(...Object.values(PERSON_CAN_DRIVE)),
});

module.exports = {
  authCreatePerson,
  authUpdatePerson,
};
