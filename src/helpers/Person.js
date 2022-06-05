const moment = require("moment");

class Person {
	static isAdult(birthday) {
		const dateNow = new Date().toLocaleDateString();
		const formatedDateNow = moment(dateNow, "DD/MM/YYYY").format("YYYY/MM/DD");
		const age = moment(formatedDateNow).diff(birthday, "years", true);
		if(Math.trunc(age) < 18) {
			return false;
		}
		return true; 	
	}
}

module.exports = Person;

 