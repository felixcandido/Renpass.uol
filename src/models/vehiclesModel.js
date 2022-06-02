const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
	description: {
		type: String
	}
});

const vehiclesSchema = new mongoose.Schema({
	model: {
		type: String,
		required: true
	},
	type: {
		type: String, 
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	},
	accessories: {
		type: [accessoriesSchema],
		required: true
	},
	passengersQtd: {
		type: Number
	}
});

const Vehicles = mongoose.model("Vehicles", vehiclesSchema);

module.exports = Vehicles;