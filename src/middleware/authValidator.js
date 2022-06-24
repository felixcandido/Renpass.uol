const formatError = require('../helpers/formatError');
const authenticate = require('../validations/schemaAuth');

module.exports = async (req, res, next) => {
  try {
    await authenticate.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
