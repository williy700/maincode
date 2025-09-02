const mongoose = require('mongoose');

const LowerwearSchema = new mongoose.Schema({
      productname: {
    type: "String",
    required: true,
  },
  productType: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model('Lowerwear', LowerwearSchema);
