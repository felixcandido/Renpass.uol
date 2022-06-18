const FleetController = require('../controllers/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental/:rentalId/fleet') => {
  routes
    .post('/', FleetController.createFleet);

  server.use(prefix, routes);
};
