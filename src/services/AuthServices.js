const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/AuthRepository');
const NotFound = require('../errors/NotFound');
const BadRequest = require('../errors/BadRequest');
require('dotenv/config');

class AuthServices {
  async authenticate(reqBody) {
    const { email, password } = reqBody;

    const person = await AuthRepository.findPerson(email);
    if (!person) throw new NotFound(`email: ${email}`);
    if (person.canDrive !== 'yes') throw new BadRequest('person does not have license to drive');
    if (!await bcrypt.compare(password, person.password)) throw new BadRequest('Invalid Password');
    return jwt.sign({ id: person.id }, process.env.SECRET, { expiresIn: 86400 });
  }
}

module.exports = new AuthServices();
