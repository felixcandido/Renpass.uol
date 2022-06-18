const FleetRepository = require('../repository/FleetRepository');

class FleetServices {
  async create(reqBody) {
    const fleet = await FleetRepository.create(reqBody);
    return fleet;
  }
}

module.exports = new FleetServices();
