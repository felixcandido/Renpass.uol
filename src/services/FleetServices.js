const FleetRepository = require('../repository/FleetRepository');

class FleetServices {
  async create(reqBody) {
    const fleet = await FleetRepository.create(reqBody);
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
