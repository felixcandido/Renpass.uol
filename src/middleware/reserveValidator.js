const formatError = require('../helpers/formatError');
const { authCreateReserve, authUpdateReserve } = require('../helpers/schemaReserve');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreateReserve.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    if (req.method === 'PATCH') {
      const data = await authUpdateReserve.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
