const formatError = require('../helpers/formatError');
const { authCreateVehicles, authUpdateVehicles } = require('../validations/schemaVehicles');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreateVehicles.validateAsync(req.body, { abortEarly: false });
      req.body = data;
      next();
    }
    if (req.method === 'PATCH') {
      const data = await authUpdateVehicles.validateAsync(req.body, { abortEarly: false });
      req.body = data;
      next();
    }
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
