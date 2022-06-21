const ReserveRepository = require('../repository/ReserveRepository');

class ReserveServices {
  async createReserve(reqBody, rentalId) {
    const reserve = await ReserveRepository.createReserve({ ...reqBody, id_rental: rentalId });
    return reserve;
  }

  async findReserve(rentalId) {
    const reserve = await ReserveRepository.findReserve(rentalId);
    return reserve;
  }

  async findById(id) {
    const reserve = await ReserveRepository.findById(id);
    return reserve;
  }

  async updateReserve(reserveId, reqBody) {
    const reserve = await ReserveRepository.updateReserve(reserveId, reqBody);
    return reserve;
  }

  async deleteReserve(reserveId) {
    const reserve = await ReserveRepository.deleteReserve(reserveId);
    return reserve;
  }
}

module.exports = new ReserveServices();
