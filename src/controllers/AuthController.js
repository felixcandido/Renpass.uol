const AuthServices = require('../services/AuthServices');

class AuthController {
  static async authenticate(req, res) {
    try {
      const token = await AuthServices.authenticate(req.body);
      res.status(200).setHeader('authorization', token).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }
}

module.exports = AuthController;
