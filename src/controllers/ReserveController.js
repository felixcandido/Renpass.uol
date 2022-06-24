const formatError = require('../helpers/formatError');
const ReserveServices = require('../services/ReserveServices');

class ReserveController {
  async createReserve(req, res) {
    try {
      const reserve = await ReserveServices.createReserve(req.body, req.params.rentalId);
      res.status(201).send(reserve);
    } catch (error) {
      res.status(error.status).send(formatError(error) || error);
    }
  }

  async findReserve(req, res) {
    try {
      const reserve = await ReserveServices.findReserve(req.params.rentalId, req.query);
      res.status(200).send(reserve);
    } catch (error) {
      res.status(error.status).send(formatError(error) || error);
    }
  }

  async findReserveById(req, res) {
    try {
      const reserve = await ReserveServices.findById(req.params.reserveId);
      res.status(200).send(reserve);
    } catch (error) {
      res.status(error.status).send(formatError(error) || error);
    }
  }

  async updateReserve(req, res) {
    try {
      await ReserveServices.updateReserve(req.params.reserveId, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status).send(formatError(error) || error);
    }
  }

  async deleteReserve(req, res) {
    try {
      await ReserveServices.deleteReserve(req.params.reserveId);
      res.status(204).end();
    } catch (error) {
      res.status(error.status).send(formatError(error) || error);
    }
  }
}

module.exports = new ReserveController();
