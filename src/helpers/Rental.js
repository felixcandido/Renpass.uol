const BadRequest = require('../errors/BadRequest');

class Rental {
  toQueryRental(query) {
    const { name, cnpj, activities, zipCode, street, complement, district, city, state } = query;
    const Regex = {
      name: new RegExp(name, 'i'),
      cnpj: new RegExp(cnpj),
      activities: new RegExp(activities, 'i'),
      'address.zipCode': new RegExp(zipCode),
      'address.street': new RegExp(street, 'i'),
      'address.complement': new RegExp(complement, 'i'),
      'address.district': new RegExp(district, 'i'),
      'address.city': new RegExp(city, 'i'),
      'address.state': new RegExp(state, 'i')
    };

    return Regex;
  }

  isFilialValidation(reqBody) {
    const { address } = reqBody;
    let count = 0;

    address.forEach((element) => {
      if (!element.isFilial) count += 1;
    });
    if (count !== 1) throw new BadRequest('must have only one /isFilial: false/');
  }
}

module.exports = new Rental();
