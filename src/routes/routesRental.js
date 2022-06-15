const RentalController = require('../controllers/RentalController');
const rentalValidator = require('../middleware/rentalValidator');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes
    .post('/', rentalValidator, RentalController.registeRental)
    .get('/', RentalController.findRental)
    .get('/:id', RentalController.findRentalbyId)
    .patch('/:id', rentalValidator, RentalController.updateRental)
    .delete('/:id', RentalController.deleteRental);

  server.use(prefix, routes);
};
