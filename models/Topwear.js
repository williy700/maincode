const mongoose = require('mongoose');

const TopwearSchema = new mongoose.Schema({
      productname: {
    type: "String",
    required: true,
  },
  productType: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model('Topwear', TopwearSchema);
