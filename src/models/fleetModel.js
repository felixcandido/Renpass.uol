const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { FLEET_STATUS } = require('../helpers/ENUMS');

const fleetSchema = new mongoose.Schema({
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vehicles',
  },
  id_rental: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Rental',
  },
  status: {
    type: String,
    enum: [...Object.values(FLEET_STATUS)],
    required: true,
  },
  daily_value: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    unique: true,
    required: true,
  },
});

fleetSchema.plugin(mongoosePaginate);

const Fleet = mongoose.model('Fleet', fleetSchema);

module.exports = Fleet;
