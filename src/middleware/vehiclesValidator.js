const { authCreateVehicles, authUpdateVehicles } = require('../helpers/schemaVehicles');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreateVehicles.validateAsync(req.body);
      req.body = data;
      next();
    }
    if (req.method === 'PATCH') {
      const data = await authUpdateVehicles.validateAsync(req.body);
      req.body = data;
      next();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
