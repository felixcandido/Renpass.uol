const formatError = require('../helpers/formatError');
const PersonServices = require('../services/PersonServices');

class PersonController {
  async registePerson(req, res) {
    try {
      const result = await PersonServices.create(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }

  async findAllPeople(req, res) {
    try {
      const result = await PersonServices.findAllPeople(req.query);
      if (!result.people.length) {
        res.status(204).end();
        return;
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }

  async findPersonById(req, res) {
    try {
      const result = await PersonServices.findPersonById(req.params.personId);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }

  async updatePerson(req, res) {
    try {
      await PersonServices.updatePerson(req.params.personId, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }

  async deletePerson(req, res) {
    try {
      await PersonServices.deletePerson(req.params.personId);
      res.status(204).end();
    } catch (error) {
      res.status(error.status).send(formatError(error));
    }
  }
}

module.exports = new PersonController();
