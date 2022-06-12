class Rental {
  static toQueryRental(query) {
    const {
      name, cnpj, activities, zipCode, street, complement, district, city, state,
    } = query;
    const Regex = {
      name: new RegExp(name),
      cnpj: new RegExp(cnpj),
      activities: new RegExp(activities),
      'address.zipCode': new RegExp(zipCode),
      'address.street': new RegExp(street),
      'address.complement': new RegExp(complement),
      'address.district': new RegExp(district),
      'address.city': new RegExp(city),
      'address.state': new RegExp(state),
    };

    return Regex;
  }
}

module.exports = Rental;
