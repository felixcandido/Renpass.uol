const AuthController = require('../controllers/AuthController');
const authValidator = require('../middleware/authValidator');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', authValidator, AuthController.authenticate);

  server.use(prefix, routes);
};
