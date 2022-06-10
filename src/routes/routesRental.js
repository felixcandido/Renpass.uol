const RentalController = require('../controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes
    .post('/', RentalController.registeRental)
    .get('/', RentalController.findRental)
    .get('/:id', RentalController.findRentalbyId)
    .patch('/:id', RentalController.updateRental)
    .delete('/:id', RentalController.deleteRental);

  server.use(prefix, routes);
};
