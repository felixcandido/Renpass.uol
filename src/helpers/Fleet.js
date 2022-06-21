/* eslint-disable camelcase */
class Fleet {
  toQueryFleet(query) {
    const { status, daily_value, plate } = query;

    return {
      status: new RegExp(status),
      daily_value: new RegExp(daily_value),
      plate: new RegExp(plate, 'i'),
    };
  }
}

module.exports = new Fleet();
