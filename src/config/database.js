const mongoose = require('mongoose');
require('dotenv/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.MONGO_URL || `mongodb://${process.env.DB_HOST}/${process.env.DB_COLLECTION}`);
  }
}

module.exports = new Database().connect();
