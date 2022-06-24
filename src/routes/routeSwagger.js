const swaggerUi = require('swagger-ui-express');
const swagger = require('../docs/swagger.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swaggerUi.serve);
  routes.get('/', swaggerUi.setup(swagger));

  server.use(prefix, routes);
};
