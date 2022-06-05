const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
		required: true,
		select: false
	},
	canDrive: {
		type: String,
		enum: ["yes", "no"],
		required: true,
	},
});

personSchema.pre("save", async function(next) {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
	next();
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;