const PersonServices = require('../services/PersonServices');

class PersonController {
  static async registePerson(req, res) {
    try {
      const result = await PersonServices.create(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  static async findAllPeople(req, res) {
    try {
      const result = await PersonServices.findAllPeople(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  static async findPersonById(req, res) {
    try {
      const result = await PersonServices.findPersonById(req.params.personId);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  static async updatePerson(req, res) {
    try {
      await PersonServices.updatePerson(req.params.personId, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  static async deletePerson(req, res) {
    try {
      await PersonServices.deletePerson(req.params.personId);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }
}

module.exports = PersonController;
