const formatError = require('../helpers/formatError');
const { authCreateFleet, authUpdateFleet } = require('../validations/schemaFleet');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreateFleet.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    if (req.method === 'PATCH') {
      const data = await authUpdateFleet.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
