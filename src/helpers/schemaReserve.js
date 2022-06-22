const Joi = require('joi');

const authCreateReserve = Joi.object({
  id_user: Joi.string().required().trim(),
  data_start: Joi.string().required().trim(),
  data_end: Joi.string().required().trim(),
  id_car: Joi.string().required().trim(),
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
