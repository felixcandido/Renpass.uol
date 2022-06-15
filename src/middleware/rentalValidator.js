const { isFilialValidation } = require('../helpers/Rental');
const { authCreateRental, authUpdateRental } = require('../helpers/schemaRental');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreateRental.validateAsync(req.body);
      req.body = data;
      isFilialValidation(req.body);
    }
    if (req.method === 'PATCH') {
      const data = await authUpdateRental.validateAsync(req.body);
      req.body = data;
    }
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};
