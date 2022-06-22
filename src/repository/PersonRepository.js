const BadRequest = require('../errors/BadRequest');
const Conflict = require('../errors/Conflict');
const Person = require('../models/personModel');
const customLabels = require('../helpers/paginateTemplate');

class PersonRepository {
  async create(reqBody) {
    const record = await Person.create(reqBody).catch((error) => {
      if (Object.keys(error.keyPattern)[0] === 'email') throw new Conflict(`email ${reqBody.email} is already in use`);
      if (Object.keys(error.keyPattern)[0] === 'cpf') throw new Conflict(`cpf ${reqBody.cpf} is already in use`);
    });
    return record;
  }

  async findPeople(RegQuery, query) {
    const { offset = 0, limit = 100 } = query;

    const options = {
      offset,
      limit,
      customLabels: { ...customLabels, docs: 'people' },
    };
    return Person.paginate(RegQuery, options);
  }

  async findPersonById(personId) {
    const person = await Person.findById(personId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return person;
  }

  async updatePerson(personId, reqBody) {
    const updatedPerson = await Person.findByIdAndUpdate(personId, reqBody).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
      if (Object.keys(error.keyPattern)[0] === 'email') throw new Conflict(`email ${reqBody.email} is already in use`);
      if (Object.keys(error.keyPattern)[0] === 'cpf') throw new Conflict(`cpf ${reqBody.cpf} is already in use`);
    });
    return updatedPerson;
  }

  async deletePerson(personId) {
    const deletedPerson = await Person.findByIdAndDelete(personId).catch((error) => {
      if (error.path === '_id') throw new BadRequest('id format is invalid');
    });
    return deletedPerson;
  }
}

module.exports = new PersonRepository();
