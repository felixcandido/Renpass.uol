const express = require("express");
require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});
require("./config/database");
const router = require("./routes/");

class App  {
	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
	}

	routes() {
		router(this.server);
	}
} 

module.exports = new App().server;