const ReserveController = require('../controllers/ReserveController');
const reserveValidator = require('../middleware/reserveValidator');

module.exports = (server, routes, prefix = '/api/v1/rental/:rentalId/reserve') => {
  routes
    .post('/', reserveValidator, ReserveController.createReserve)
    .get('/', ReserveController.findReserve)
    .get('/:reserveId', ReserveController.findReserveById)
    .patch('/:reserveId', reserveValidator, ReserveController.updateReserve)
    .delete('/:reserveId', ReserveController.deleteReserve);

  server.use(prefix, routes);
};
