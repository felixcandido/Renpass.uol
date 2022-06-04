const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	cpf: {
		type: String, 
		required: true
	},
	birthDay: {
		type: Date,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	canDrive: {
		type: String,
		enum: ["yes", "no"],
		required: true,
	},
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;