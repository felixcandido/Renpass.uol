const Joi = require('joi');

const authCreateRental = Joi.object({
  name: Joi.string().required().trim(),
  cnpj: Joi.string().required().trim(),
  activities: Joi.string().required().trim(),
  address: Joi.array().items({
    cep: Joi.string().trim().required(),
    number: Joi.string().trim().required(),
    complement: Joi.string().trim(),
    isFilial: Joi.boolean().required(),
  }).required(),
});

const authUpdateRental = Joi.object({
  name: Joi.string().trim(),
  cnpj: Joi.string().trim(),
  activities: Joi.string().trim(),
  address: Joi.array().items({
    cep: Joi.string().trim(),
    number: Joi.string().trim(),
    complement: Joi.string().trim(),
    isFilial: Joi.boolean(),
  }),
});

module.exports = {
  authCreateRental,
  authUpdateRental,
};
