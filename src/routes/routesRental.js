const RentalController = require('../controllers/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes
    .post('/', RentalController.registeRental);

  server.use(prefix, routes);
};
