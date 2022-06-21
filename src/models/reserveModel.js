const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const reserveSchema = new mongoose.Schema({
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Person',
  },
  id_rental: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Rental',
  },
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vehicles',
  },
  data_start: {
    type: String,
    required: true,
  },
  data_end: {
    type: String,
    required: true,
  },
  final_value: {
    type: String,
    required: true,
  },
});

reserveSchema.plugin(mongoosePaginate);

const Reserve = mongoose.model('Reserve', reserveSchema);

module.exports = Reserve;
