const PersonRepository = require("../repository/PersonRepository");

class PersonServices {
	static async create(reqBody) {
		const record = await PersonRepository.create(reqBody);
		return record;
	}

	static async findAllPeople() {
		const people = await PersonRepository.findPeople();
		return people;
	}

	static async findPersonById(personId) {
		const person = await PersonRepository.findPersonById(personId);
		return person;
	}

	static async updatePerson(personId, reqBody) {
		const updatedPerson = await PersonRepository.updatePerson(personId, reqBody);
		return updatedPerson;
	}

	static async deletePerson(personId) {
		await PersonRepository.deletePerson(personId);
	}
}

module.exports = PersonServices;