const CarServices = require('../services/CarServices');

class CarController {
  async registeCar(req, res) {
    try {
      const result = await CarServices.create(req.body);
      res.status(201).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async findAllCars(req, res) {
    try {
      const result = await CarServices.findAllCars(req.query);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async findCarById(req, res) {
    try {
      const result = await CarServices.findCarById(req.params.CarId);
      res.status(200).send(result);
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async updateCar(req, res) {
    try {
      await CarServices.updateCar(req.params.CarId, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }

  async updateAccessories(req, res) {
    try {
      await CarServices.updateAccessories(req.params.id, req.body);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400);
    }
  }

  async deleteCar(req, res) {
    try {
      await CarServices.deleteCar(req.params.CarId);
      res.status(204).end();
    } catch (error) {
      res.status(error.status || 400).send(error);
    }
  }
}

module.exports = new CarController();
