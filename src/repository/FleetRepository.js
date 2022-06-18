const Fleet = require('../models/fleetModel');

class FleetRepository {
  async create(reqBody) {
    const fleet = await Fleet.create(reqBody);
    return fleet;
  }
}

module.exports = new FleetRepository();
