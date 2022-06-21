/* eslint-disable camelcase */
const BadRequest = require('../errors/BadRequest');
const Conflict = require('../errors/Conflict');
const Fleet = require('../models/fleetModel');

class FleetRepository {
  async create(reqBody) {
    const fleet = await Fleet.create(reqBody).catch((error) => {
      if (error.message === 'Fleet validation failed') {
        throw new BadRequest('id format is invalid');
      }
      if (Object.keys(error.keyPattern)[0] === 'plate') {
        throw new Conflict(`plate ${reqBody.plate} already has registration`);
      }
    });
    return fleet;
  }

  async findFleet(id_rental, regQuery, query) {
    const { page = 1, limit = 100 } = query;

    const customLabels = {
      totalDocs: 'total',
      page: 'offset',
      nextPage: false,
      prevPage: false,
      totalPages: 'offsets',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    };

    const options = {
      page,
      limit,
      customLabels,
    };
    const fleet = await Fleet.paginate({ id_rental, ...regQuery }, options).catch((error) => {
      if (error.kind === 'ObjectId') {
        throw new BadRequest('id format is invalid');
      }
    });
    return fleet;
  }

  async findFleetById(id) {
    const fleet = await Fleet.findById(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return fleet;
  }

  async updateFleet(id, reqBody) {
    const fleet = await Fleet.findByIdAndUpdate(id, { ...reqBody }).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
      if (Object.keys(error.keyPattern)[0] === 'plate') {
        throw new Conflict(`plate ${reqBody.plate} already has registration`);
      }
    });
    return fleet;
  }

  async deleteFleet(id) {
    const fleet = await Fleet.findByIdAndDelete(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return fleet;
  }
}

module.exports = new FleetRepository();
