require('dotenv/config');
const jwt = require('jsonwebtoken');
const Unauthorized = require('../errors/Unauthorized');
const formatError = require('../helpers/formatError');

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Unauthorized('No Token provided');

    const [, token] = auth.split(' ');

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) throw new Unauthorized('Invalid Token');
      req.userId = decoded.id;
      next();
    });
  } catch (error) {
    res.status(error.status || 400).send(formatError(error));
  }
};
