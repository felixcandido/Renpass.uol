class Vehicles {
  toQueryVehicle(query) {
    const { model, type, brand, year, color, accessories } = query;
    const Regex = {
      model: new RegExp(model, 'i'),
      type: new RegExp(type, 'i'),
      brand: new RegExp(brand, 'i'),
      color: new RegExp(color, 'i'),
      'accessories.description': new RegExp(accessories, 'i')
    };

    if (year) {
      Object.assign(Regex, { year });
    }
    return Regex;
  }
}

module.exports = new Vehicles();
