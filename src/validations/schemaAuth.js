const Joi = require('joi');

const authenticate = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

module.exports = authenticate;
