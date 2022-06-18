const Fleet = require('../models/fleetModel');

class FleetRepository {
  static async create(reqBody) {
    const fleet = await Fleet.create(reqBody);
    return fleet;
  }
}

module.exports = FleetRepository;
