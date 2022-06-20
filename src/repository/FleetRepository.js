/* eslint-disable no-underscore-dangle */
const BadRequest = require('../errors/BadRequest');
const Conflict = require('../errors/Conflict');
const Fleet = require('../models/fleetModel');

class FleetRepository {
  async create(reqBody) {
    const fleet = await Fleet.create(reqBody).catch((error) => {
      if (error._message === 'Fleet validation failed') {
        throw new BadRequest('id format is invalid');
      }
      if (Object.keys(error.keyPattern)[0] === 'plate') {
        throw new Conflict(`plate ${reqBody.plate} already has registration`);
      }
    });
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
