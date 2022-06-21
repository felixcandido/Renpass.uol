const ReserveController = require('../controllers/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/rental/:rentalId/reserve') => {
  routes
    .post('/', ReserveController.createReserve)
    .get('/', ReserveController.findReserve)
    .get('/:reserveId', ReserveController.findReserveById)
    .patch('/:reserveId', ReserveController.updateReserve)
    .delete('/:reserveId', ReserveController.deleteReserve);

  server.use(prefix, routes);
};
