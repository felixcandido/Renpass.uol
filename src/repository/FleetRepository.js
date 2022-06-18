const Fleet = require('../models/fleetModel');

class FleetRepository {
  async create(reqBody) {
    const fleet = await Fleet.create(reqBody);
    return fleet;
  }

  async findFleet() {
    const fleet = await Fleet.find();
    return fleet;
  }

  async findFleetById(id) {
    const fleet = await Fleet.findById(id);
    return fleet;
  }

  async updateFleet(id, reqBody) {
    const fleet = await Fleet.findByIdAndUpdate(id, reqBody);
    return fleet;
  }

  async deleteFleet(id) {
    const fleet = await Fleet.findByIdAndDelete(id);
    return fleet;
  }
}

module.exports = new FleetRepository();
