const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/AuthRepository');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
require('dotenv/config');

class AuthServices {
  static async authenticate(reqBody) {
    const { email, password } = reqBody;

    const person = await AuthRepository.findPerson(email);
    if (!person) throw new NotFound(`email: ${email}`);
    if (!await bcrypt.compare(password, person.password)) throw new BadRequest('Invalid Password');

    return jwt.sign({ id: person.id }, process.env.SECRET, { expiresIn: 7200 });
  }
}

module.exports = AuthServices;
