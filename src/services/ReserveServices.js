const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
const { reserveValue, toQueryReserve } = require('../helpers/Reserve');
const FleetRepository = require('../repository/FleetRepository');
const PersonRepository = require('../repository/PersonRepository');
const RentalRepository = require('../repository/RentalRepository');
const ReserveRepository = require('../repository/ReserveRepository');

class ReserveServices {
  async createReserve(reqBody, id_rental) {
    const rental = await RentalRepository.findById(id_rental);
    if (!rental) throw new NotFound(`rental with ID: ${id_rental}`);

    const car = await FleetRepository.findFleetById(reqBody.id_car);
    if (!car) throw new NotFound(`car with ID: ${reqBody.id_car}`);

    const user = await PersonRepository.findPersonById(reqBody.id_user);
    if (!user) throw new NotFound(`user with ID: ${reqBody.id_user}`);
    if (user.canDrive !== 'yes') throw new BadRequest('user must be able to drive');

    const { data_start, data_end } = reqBody;
    const final_value = reserveValue(data_start, data_end, car.daily_value);

    const reserve = await ReserveRepository.createReserve({ ...reqBody, id_rental, final_value });
    return reserve;
  }

  async findReserve(rentalId, query) {
    const regQuery = toQueryReserve(query);
    const reserve = await ReserveRepository.findReserve(rentalId, regQuery, query);
    if (!reserve.reserves.length) throw new NotFound('Reserve');
    return reserve;
  }

  async findById(id) {
    const reserve = await ReserveRepository.findById(id);
    if (!reserve) throw new NotFound(`ID: ${id}`);
    return reserve;
  }

  async updateReserve(reserveId, reqBody) {
    const reserve = await ReserveRepository.updateReserve(reserveId, reqBody);
    if (!reserve) throw new NotFound(`ID: ${reserveId}`);
    return reserve;
  }

  async deleteReserve(reserveId) {
    const reserve = await ReserveRepository.deleteReserve(reserveId);
    if (!reserve) throw new NotFound(`ID: ${reserveId}`);
    return reserve;
  }
}

module.exports = new ReserveServices();
