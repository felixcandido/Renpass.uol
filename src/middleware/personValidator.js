const BadRequest = require('../errors/BadRequest');
const formatError = require('../helpers/formatError');
const { validationCpf } = require('../helpers/Person');
const { authCreatePerson, authUpdatePerson } = require('../validations/schemasPerson');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      await authCreatePerson.validateAsync(req.body, { abortEarly: false });
    }
    if (req.method === 'PATCH') {
      await authUpdatePerson.validateAsync(req.body, { abortEarly: false });
    }
    if (!validationCpf(req.body.cpf)) {
      throw new BadRequest(`Invalid CPF ${req.body.cpf}`);
    }
    next();
  } catch (error) {
    res.status(400).send(formatError(error));
  }
};
