const Person = require("../models/personModel");

class PersonRepository {
	static async create(reqBody) {
		const record = await Person.create(reqBody);
		return record;
	}
	
	static async findPeople(query) {
		const people = await Person.find(query);
		return people;
	}

	static async findPersonById(personId) {
		const person = await Person.findById(personId);
		return person;
	}

	static async updatePerson(personId, reqBody) {
		const updatedPerson = await Person.findByIdAndUpdate(personId, reqBody);
		return updatedPerson;
	}

	static async deletePerson(personId) {
		const deletedPerson = await Person.findByIdAndDelete(personId);
		return deletedPerson;
	}
}

module.exports = PersonRepository;