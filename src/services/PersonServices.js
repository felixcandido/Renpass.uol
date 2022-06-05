const moment = require("moment");
const BadRequest = require("../errors/BadRequest");
const {isAdult} = require("../helpers/Person");
const PersonRepository = require("../repository/PersonRepository");

class PersonServices {
	static async create(reqBody) {
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");
		if(!isAdult(birthDay)) {
			throw new BadRequest("Must be over 18 years old");
		}
		const record = await PersonRepository.create({...reqBody, birthDay});
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
		const birthDay = moment(reqBody.birthDay, "DD/MM/YYYY").format("YYYY/MM/DD");
		if(!isAdult(birthDay)) {
			throw new BadRequest("Must be over 18 years old");
		}
		const updatedPerson = await PersonRepository.updatePerson(personId, {...reqBody, birthDay});
		return updatedPerson;
	}

	static async deletePerson(personId) {
		await PersonRepository.deletePerson(personId);
	}
}

module.exports = PersonServices;