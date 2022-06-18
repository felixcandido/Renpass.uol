const FleetRepository = require('../repository/FleetRepository');

class FleetServices {
  static async create(reqBody) {
    const fleet = await FleetRepository.create(reqBody);
    return fleet;
  }
}

module.exports = FleetServices;
