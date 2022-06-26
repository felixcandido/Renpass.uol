const { faker } = require('@faker-js/faker');
const { factory } = require('factory-girl');
const Person = require('../../src/models/personModel');

factory.define('Person', Person, {
  name: faker.name.findName(),
  cpf: '131.147.860-49',
  birthDay: '03/03/2000',
  email: faker.internet.email(),
  password: faker.internet.password(),
  canDrive: 'yes'
});

module.exports = factory;
