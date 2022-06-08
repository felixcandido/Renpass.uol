const Person = require("../models/personModel");

class AuthRepository {
	static async findPerson(email) {
		return await Person.findOne({email}).select("+password");
	}
}

module.exports = AuthRepository;