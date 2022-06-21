const moment = require('moment');
const BadRequest = require('../errors/BadRequest');

class Person {
  isAdult(birthday) {
    if (!birthday) return true;

    const dateNow = new Date().toLocaleDateString();
    const formatedDateNow = moment(dateNow, 'DD/MM/YYYY').format('YYYY/MM/DD');

    const formatedBirthday = moment(birthday, 'DD/MM/YYYY').format('YYYY/MM/DD');
    const age = moment(formatedDateNow).diff(formatedBirthday, 'years', true);

    if (Math.trunc(age) < 18) {
      throw new BadRequest('Must be over 18 years old');
    }
    return true;
  }

  toQueryPerson(query) {
    const {
      name, cpf, email, canDrive,
    } = query;
    return {
      name: new RegExp(name, 'i'),
      cpf: new RegExp(cpf),
      email: new RegExp(email),
      canDrive: new RegExp(canDrive),
    };
  }

  validationCpf(cpfReq) {
    if (!cpfReq) return true;

    const cpf = cpfReq.replace(/[^\d]+/g, '');
    let sum = 0;

    if (cpf === '01234567890') return false;

    for (let i = 0; i <= 9; i += 1) {
      const sameNumbers = `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`;
      if (cpf === sameNumbers) return false;
    }

    for (let i = 1; i <= 9; i += 1) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    let rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) rest = 0;

    if (rest !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i += 1) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;

    if (rest !== parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}

module.exports = new Person();
