const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: "String",
    required: true,
  },
  lastname: {
    type: "String",
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
