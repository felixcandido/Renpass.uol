const moment = require("moment");
const BadRequest = require("../errors/BadRequest");

class Person {
	static isAdult(birthday) {
		const dateNow = new Date().toLocaleDateString();
		const formatedDateNow = moment(dateNow, "DD/MM/YYYY").format("YYYY/MM/DD");
		const age = moment(formatedDateNow).diff(birthday, "years", true);
		if(Math.trunc(age) < 18) {
			throw new BadRequest("Must be over 18 years old"); 
		}
		return true; 	
	}

	static toQueryPerson(query) {
		const {name, cpf, birthday, email, canDrive} = query;
		return {
			name: new RegExp(name),
			cpf: new RegExp(cpf),
			birthday: new RegExp(birthday),
			email: new RegExp(email),
			canDrive: new RegExp(canDrive)
		};
	}
}

module.exports = Person;

 