const Reserve = require('../models/reserveModel');

class ReserveRepository {
  async createReserve(reqBody) {
    const reserve = await Reserve.create(reqBody);
    return reserve;
  }

  async findReserve(id_rental) {
    const reserve = await Reserve.paginate({ id_rental });
    return reserve;
  }

  async findById(id) {
    const reserve = await Reserve.findById(id);
    return reserve;
  }

  async updateReserve(id, reqBody) {
    const reserve = await Reserve.findByIdAndUpdate(id, reqBody);
    return reserve;
  }

  async deleteReserve(id) {
    const reserve = await Reserve.findByIdAndDelete(id);
    return reserve;
  }
}

module.exports = new ReserveRepository();
