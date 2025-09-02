const mongoose = require('mongoose');

const NewOutfitSchema = new mongoose.Schema({
      productname: {
    type: "String",
    required: true,
  },
  productType: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model('NewOutfit', NewOutfitSchema);
