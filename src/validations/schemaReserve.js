const Joi = require('joi');

const authCreateReserve = Joi.object({
  id_user: Joi.string().trim().required(),
  data_start: Joi.string().trim().required(),
  data_end: Joi.string().trim().required(),
  id_car: Joi.string().trim().required(),
  final_value: Joi.string(),
});

const authUpdateReserve = Joi.object({
  id_user: Joi.string().trim(),
  data_start: Joi.string().trim(),
  data_end: Joi.string().trim(),
  id_car: Joi.string().trim(),
  final_value: Joi.string(),
});

module.exports = {
  authCreateReserve,
  authUpdateReserve,
};
