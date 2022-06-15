const PersonController = require('../controllers/PersonController');
const personValidator = require('../middleware/personValidator');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes
    .post('/', personValidator, PersonController.registePerson)
    .get('/', PersonController.findAllPeople)
    .get('/:personId', PersonController.findPersonById)
    .patch('/:personId', personValidator, PersonController.updatePerson)
    .delete('/:personId', PersonController.deletePerson);

  server.use(prefix, routes);
};
