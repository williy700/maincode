const mongoose = require('mongoose');

const FootwearSchema = new mongoose.Schema({
      productname: {
    type: "String",
    required: true,
  },
  productType: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model('Footwear', FootwearSchema);
