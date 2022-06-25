const Joi = require('joi');

const authCreateVehicles = Joi.object({
  model: Joi.string().trim().required(),
  type: Joi.string().trim().required(),
  brand: Joi.string().trim().required(),
  color: Joi.string().trim().required(),
  year: Joi.number().min(1950).max(2022).required(),
  accessories: Joi.array()
    .min(1)
    .items({
      description: Joi.string().required()
    })
    .unique()
    .required(),
  passengersQtd: Joi.number().min(1).required()
});

const authUpdateVehicles = Joi.object({
  model: Joi.string().trim(),
  type: Joi.string().trim(),
  brand: Joi.string().trim(),
  color: Joi.string().trim(),
  year: Joi.number().min(1950).max(2022),
  accessories: Joi.array()
    .min(1)
    .items({
      description: Joi.string().required()
    })
    .unique(),
  passengersQtd: Joi.number().min(1)
});

module.exports = {
  authCreateVehicles,
  authUpdateVehicles
};
