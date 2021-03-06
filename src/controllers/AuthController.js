const formatError = require('../helpers/formatError');
const AuthServices = require('../services/AuthServices');

class AuthController {
  async authenticate(req, res) {
    try {
      const token = await AuthServices.authenticate(req.body);
      res.status(200).setHeader('authorization', token).end();
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }
}

module.exports = new AuthController();
