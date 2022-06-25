const NotFound = require('../errors/NotFound');
const { toQueryFleet } = require('../helpers/Fleet');
const CarRepository = require('../repository/CarRepository');
const FleetRepository = require('../repository/FleetRepository');
const RentalRepository = require('../repository/RentalRepository');

class FleetServices {
  async create(reqBody, rentalId) {
    const rental = await RentalRepository.findById(rentalId);
    if (!rental) {
      throw new NotFound(`ID: ${rentalId}`);
    }
    const car = await CarRepository.findCarById(reqBody.id_car);
    if (!car) {
      throw new NotFound(`ID: ${reqBody.id_car}`);
    }
    const fleet = await FleetRepository.create({ ...reqBody, id_rental: rentalId });
    return fleet;
  }

  async findFleet(rentalId, query) {
    const regQuery = toQueryFleet(query);
    const fleet = await FleetRepository.findFleet(rentalId, regQuery, query);
    return fleet;
  }

  async findFleetById(fleetId) {
    const fleet = await FleetRepository.findFleetById(fleetId);
    if (!fleet) {
      throw new NotFound(`ID: ${fleetId}`);
    }
    return fleet;
  }

  async updateFleet(fleetId, reqBody) {
    const fleet = await FleetRepository.updateFleet(fleetId, reqBody);
    if (!fleet) {
      throw new NotFound(`ID: ${fleetId}`);
    }
    return fleet;
  }

  async deleteFleet(fleetId) {
    const fleet = await FleetRepository.deleteFleet(fleetId);
    if (!fleet) {
      throw new NotFound(`ID: ${fleetId}`);
    }
    return fleet;
  }
}

module.exports = new FleetServices();
