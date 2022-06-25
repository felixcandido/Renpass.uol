const Joi = require('joi').extend(require('@joi/date'));

const authCreateReserve = Joi.object({
  id_user: Joi.string().trim().required(),
  data_start: Joi.date().format('DD/MM/YYYY').required(),
  data_end: Joi.date().format('DD/MM/YYYY').required(),
  id_car: Joi.string().trim().required(),
  final_value: Joi.string()
});

const authUpdateReserve = Joi.object({
  id_user: Joi.string().trim(),
  data_start: Joi.date().format('DD/MM/YYYY'),
  data_end: Joi.date().format('DD/MM/YYYY'),
  id_car: Joi.string().trim(),
  final_value: Joi.string()
});

module.exports = {
  authCreateReserve,
  authUpdateReserve
};
