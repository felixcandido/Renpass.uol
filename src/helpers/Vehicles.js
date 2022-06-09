class Vehicles {
  static toQueryVehicle(query) {
    const {
      model, type, brand, year, color, accessories,
    } = query;
    const Regex = {
      model: new RegExp(model),
      type: new RegExp(type),
      brand: new RegExp(brand),
      color: new RegExp(color),
      'accessories.description': new RegExp(accessories),
    };

    if (year) {
      Object.assign(Regex, { year });
    }
    return Regex;
  }
}

module.exports = Vehicles;
