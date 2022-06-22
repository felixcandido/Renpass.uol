const moment = require('moment');

class Reserve {
  reserveValue(dateStart, dateEnd, daily) {
    const days = moment(dateEnd, 'DD/MM/YYYY').diff(moment(dateStart, 'DD/MM/YYYY'), 'days');
    const value = (daily.replace(',', '.') * days);
    return (value.toFixed(2).toString()).replace('.', ',');
  }

  toQueryReserve(query) {
    const {
      id_user, data_start, data_end, id_car, final_value,
    } = query;

    const Regex = {
      data_start: new RegExp(data_start),
      data_end: new RegExp(data_end),
      final_value: new RegExp(final_value),
    };

    if (id_car) Regex.id_car = id_car;
    if (id_user) Regex.id_user = id_user;

    return Regex;
  }
}
module.exports = new Reserve();
