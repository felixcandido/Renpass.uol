const Joi = require('joi').extend(require('@joi/date'));
const { PERSON_CAN_DRIVE } = require('../helpers/ENUMS');
const { cpfRegex } = require('../helpers/regex');

const authCreatePerson = Joi.object({
  name: Joi.string().trim().required(),
  cpf: Joi.string().pattern(cpfRegex).trim().length(14)
    .required(),
  birthDay: Joi.date().format('DD/MM/YYYY').required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
  canDrive: Joi.string().valid(...Object.values(PERSON_CAN_DRIVE)).required(),
});

const authUpdatePerson = Joi.object({
  name: Joi.string().trim(),
  cpf: Joi.string().pattern(cpfRegex).trim().length(14),
  birthDay: Joi.date().format('DD/MM/YYYY'),
  email: Joi.string().email().trim(),
  password: Joi.string().min(6),
  canDrive: Joi.string().valid(...Object.values(PERSON_CAN_DRIVE)),
});

module.exports = {
  authCreatePerson,
  authUpdatePerson,
};
