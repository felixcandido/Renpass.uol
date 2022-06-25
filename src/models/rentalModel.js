const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const adressSchema = new mongoose.Schema(
  {
    zipCode: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    complement: {
      type: String
    },
    district: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    isFilial: {
      type: Boolean,
      required: true
    }
  },
  { versionKey: false }
);

const rentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true,
    unique: true
  },
  activities: {
    type: String,
    required: true
  },
  address: {
    type: [adressSchema],
    required: true
  }
});
rentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
