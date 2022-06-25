const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongoosePaginate = require('mongoose-paginate-v2');
const { PERSON_CAN_DRIVE } = require('../helpers/ENUMS');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  birthDay: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  canDrive: {
    type: String,
    enum: [...Object.values(PERSON_CAN_DRIVE)],
    required: true,
  },
});

personSchema.plugin(mongoosePaginate);

// eslint-disable-next-line func-names
personSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
