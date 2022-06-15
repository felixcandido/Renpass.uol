const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const accessoriesSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const vehiclesSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  accessories: {
    type: [accessoriesSchema],
    required: true,

  },
  passengersQtd: {
    type: Number,
  },
});

vehiclesSchema.plugin(mongoosePaginate);

const Vehicles = mongoose.model('Vehicles', vehiclesSchema);

module.exports = Vehicles;
