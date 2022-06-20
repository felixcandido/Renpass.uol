const FleetController = require('../controllers/FleetController');
const fleetValidator = require('../middleware/fleetValidator');

module.exports = (server, routes, prefix = '/api/v1/rental/:rentalId/fleet') => {
  routes
    .post('/', fleetValidator, FleetController.createFleet)
    .get('/', FleetController.findFleet)
    .get('/:fleetId', FleetController.findFleetById)
    .patch('/:fleetId', fleetValidator, FleetController.updateFleet)
    .delete('/:fleetId', FleetController.deleteFleet);

  server.use(prefix, routes);
};
