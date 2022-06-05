const moment = require("moment");
const NotFound = require("../errors/NotFound");
const PersonRepository = require("../repository/PersonRepository");
const {isAdult, toQueryPerson} = require("../helpers/Person");

class PersonServices {
	static async create(reqBody) {
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");
		isAdult(birthDay);
		const record = await PersonRepository.create({...reqBody, birthDay});
		return record;
	}

	static async findAllPeople(query) {
		const regQuery = toQueryPerson(query);
		const people = await PersonRepository.findPeople(regQuery);
		if(!people.length) {
			throw new NotFound("Person");
		}
		return people;
	}

	static async findPersonById(personId) {
		const person = await PersonRepository.findPersonById(personId);
		if(!person) {
			throw new NotFound(`ID: ${personId}`);
		}
		return person;
	}

	static async updatePerson(personId, reqBody) {
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");
		isAdult(birthDay);
		const updatedPerson = await PersonRepository.updatePerson(personId, {...reqBody, birthDay});
		if(!updatedPerson) {
			throw new NotFound(`ID: ${personId}`);
		}
		return updatedPerson;
	}

	static async deletePerson(personId) {
		const deletedPerson = await PersonRepository.deletePerson(personId);
		if(!deletedPerson) {
			throw new NotFound(`ID: ${personId}`);
		}
	}
}

module.exports = PersonServices;