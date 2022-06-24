const BadRequest = require('../errors/BadRequest');
const formatError = require('../helpers/formatError');
const { validationCpf } = require('../helpers/Person');
const { authCreatePerson, authUpdatePerson } = require('../validations/schemasPerson');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreatePerson.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    if (req.method === 'PATCH') {
      const data = await authUpdatePerson.validateAsync(req.body, { abortEarly: false });
      req.body = data;
    }
    if (!validationCpf(req.body.cpf)) { throw new BadRequest(`Invalid CPF ${req.body.cpf}`); }
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
