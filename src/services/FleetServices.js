const NotFound = require('../errors/NotFound');
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

  async findFleet() {
    const fleet = await FleetRepository.findFleet();
    return fleet;
  }

  async findFleetById(fleetId) {
    const fleet = await FleetRepository.findFleetById(fleetId);
    return fleet;
  }

  async updateFleet(fleetId, reqBody) {
    const fleet = await FleetRepository.updateFleet(fleetId, reqBody);
    return fleet;
  }

  async deleteFleet(fleetId) {
    const fleet = await FleetRepository.deleteFleet(fleetId);
    return fleet;
  }
}

module.exports = new FleetServices();
