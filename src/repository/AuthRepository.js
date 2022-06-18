const Person = require('../models/personModel');

class AuthRepository {
  async findPerson(email) {
    const user = await Person.findOne({ email }).select('+password');
    return user;
  }
}

module.exports = new AuthRepository();
