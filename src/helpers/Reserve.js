const moment = require('moment');

class Reserve {
  reserveValue(dateStart, dateEnd, daily) {
    const days = moment(dateEnd, 'DD/MM/YYYY').diff(moment(dateStart, 'DD/MM/YYYY'), 'days');
    const value = (daily.replace(',', '.') * days);
    return (value.toFixed(2).toString()).replace('.', ',');
  }
}
module.exports = new Reserve();
