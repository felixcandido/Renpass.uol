const CarController = require('../controllers/CarController');
const vehiclesValidator = require('../middleware/vehiclesValidator');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes
    .post('/', vehiclesValidator, CarController.registeCar)
    .get('/', CarController.findAllCars)
    .get('/:CarId', CarController.findCarById)
    .patch('/:CarId', vehiclesValidator, CarController.updateCar)
    .delete('/:CarId', CarController.deleteCar);

  server.use(prefix, routes);
};
