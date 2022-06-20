const Joi = require('joi');

const authCreateFleet = Joi.object({
  id_car: Joi.string().required().trim(),
  status: Joi.string().required().valid('available', 'unavailable', 'rented').trim(),
  daily_value: Joi.string().required().trim(),
  plate: Joi.string().required().trim(),
});

const authUpdateFleet = Joi.object({
  id_car: Joi.string().trim(),
  status: Joi.string().valid('available', 'unavailable', 'rented').trim(),
  daily_value: Joi.string().trim(),
  plate: Joi.string().trim(),
});

module.exports = {
  authCreateFleet,
  authUpdateFleet,
};
