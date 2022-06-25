const Joi = require('joi');
const { FLEET_STATUS } = require('../helpers/ENUMS');

const authCreateFleet = Joi.object({
  id_car: Joi.string().trim().required(),
  status: Joi.string()
    .valid(...Object.values(FLEET_STATUS))
    .trim()
    .required(),
  daily_value: Joi.string().trim().required(),
  plate: Joi.string().trim().required()
});

const authUpdateFleet = Joi.object({
  id_car: Joi.string().trim(),
  status: Joi.string()
    .valid(...Object.values(FLEET_STATUS))
    .trim(),
  daily_value: Joi.string().trim(),
  plate: Joi.string().trim()
});

module.exports = {
  authCreateFleet,
  authUpdateFleet
};
