const mongoose = require('mongoose');

const staySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Stay = mongoose.model('Stay', staySchema);
module.exports = Stay;