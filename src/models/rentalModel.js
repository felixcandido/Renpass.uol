const mongoose = require('mongoose');

const adressSchema = new mongoose.Schema({
  cep: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
  },
  isFilial: {
    type: Boolean,
    required: true,
  },
}, { versionKey: false });

const rentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  activities: {
    type: Date,
    required: true,
  },
  adress: {
    type: [adressSchema],
    required: true,
  },
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
