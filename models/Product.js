const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Product', ProductSchema);
