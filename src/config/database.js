const mongoose = require('mongoose');
require('dotenv/config');

class Database {
  constructor() {
    this.connect();
  }

  // eslint-disable-next-line class-methods-use-this
  connect() {
    return mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_COLLECTION}`);
  }
}

module.exports = new Database().connect();
