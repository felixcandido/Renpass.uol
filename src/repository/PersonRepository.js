const Person = require("../models/personModel");

class PersonRepository {
	static async create(reqBody) {
		const record = await Person.create(reqBody);
		return record;
	}
	
	static async findPeople(RegQuery, query) {
		const {page = 1, limit = 20} = query;
		const people = await Person.find(RegQuery).limit(limit * 1).skip((page - 1) * limit);
		const count = await Person.countDocuments(RegQuery);
		
		return {
			people,
			totalPages: Math.ceil(count / limit),
			currentPage: page
		};
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