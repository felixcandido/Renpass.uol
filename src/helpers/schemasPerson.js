const Joi = require('joi');

const authCreatePerson = Joi.object({
  name: Joi.string().required().trim(),
  cpf: Joi.string()
    .required()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
    .trim()
    .length(11)
    .length(14),
  birthDay: Joi.string().required().pattern(/(\d{2})\/(\d{2})\/(\d{4})$/),
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
  authCreatePerson,
  authUpdatePerson,
};
