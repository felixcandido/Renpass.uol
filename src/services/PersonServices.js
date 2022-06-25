const NotFound = require('../errors/NotFound');
const PersonRepository = require('../repository/PersonRepository');
const { isAdult, toQueryPerson } = require('../helpers/Person');

class PersonServices {
  async create(reqBody) {
    isAdult(reqBody.birthDay);
    const record = await PersonRepository.create(reqBody);
    return record;
  }

  async findAllPeople(query) {
    const regQuery = toQueryPerson(query);
    const people = await PersonRepository.findPeople(regQuery, query);
    return people;
  }

  async findPersonById(personId) {
    const person = await PersonRepository.findPersonById(personId);
    if (!person) {
      throw new NotFound(`ID: ${personId}`);
    }
    return person;
  }

  async updatePerson(personId, reqBody) {
    isAdult(reqBody.birthDay);
    const updatedPerson = await PersonRepository.updatePerson(personId, { ...reqBody });
    if (!updatedPerson) throw new NotFound(`ID: ${personId}`);
    return updatedPerson;
  }

  async deletePerson(personId) {
    const deletedPerson = await PersonRepository.deletePerson(personId);
    if (!deletedPerson) {
      throw new NotFound(`ID: ${personId}`);
    }
  }
}

module.exports = new PersonServices();
