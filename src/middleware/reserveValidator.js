const formatError = require('../helpers/formatError');
const { authCreateReserve, authUpdateReserve } = require('../validations/schemaReserve');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      await authCreateReserve.validateAsync(req.body, { abortEarly: false });
    }
    if (req.method === 'PATCH') {
      await authUpdateReserve.validateAsync(req.body, { abortEarly: false });
    }
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
