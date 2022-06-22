const BadRequest = require('../errors/BadRequest');
const customLabels = require('../helpers/paginateTemplate');
const Reserve = require('../models/reserveModel');

class ReserveRepository {
  async createReserve(reqBody) {
    const reserve = await Reserve.create(reqBody);
    return reserve;
  }

  async findReserve(id_rental, regQuery, query) {
    const { offset = 0, limit = 100 } = query;

    const options = {
      offset,
      limit,
      customLabels: { ...customLabels, docs: 'reserves' },
    };
    const reserve = await Reserve.paginate({ id_rental, ...regQuery }, options).catch((error) => {
      if (error.kind === 'ObjectId') {
        throw new BadRequest('id format is invalid');
      }
    });
    return reserve;
  }

  async findById(id) {
    const reserve = await Reserve.findById(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return reserve;
  }

  async updateReserve(id, reqBody) {
    const reserve = await Reserve.findByIdAndUpdate(id, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return reserve;
  }

  async deleteReserve(id) {
    const reserve = await Reserve.findByIdAndDelete(id).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return reserve;
  }
}

module.exports = new ReserveRepository();
