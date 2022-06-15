const BadRequest = require('../errors/BadRequest');
const { validationCpf } = require('../helpers/Person');
const { authCreatePerson, authUpdatePerson } = require('../helpers/schemasPerson');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'POST') {
      const data = await authCreatePerson.validateAsync(req.body);
      req.body = data;
    }
    if (req.method === 'PATCH') {
      const data = await authUpdatePerson.validateAsync(req.body);
      req.body = data;
    }
    if (!validationCpf(req.body.cpf)) { throw new BadRequest('CPF must be valid'); }
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};
