const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const database = mongoose.connection;

module.exports = database;
