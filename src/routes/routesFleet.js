const FleetController = require('../controllers/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental/:rentalId/fleet') => {
  routes
    .post('/', FleetController.createFleet)
    .get('/', FleetController.findFleet)
    .get('/:fleetId', FleetController.findFleetById)
    .patch('/:fleetId', FleetController.updateFleet)
    .delete('/:fleetId', FleetController.deleteFleet);

  server.use(prefix, routes);
};
