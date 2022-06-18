const BadRequest = require('../errors/BadRequest');
const Person = require('../models/personModel');

class PersonRepository {
  async create(reqBody) {
    const record = await Person.create(reqBody);
    return record;
  }

  async findPeople(RegQuery, query) {
    const { page = 1, limit = 20 } = query;
    return Person.paginate(RegQuery, { page, limit });
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
