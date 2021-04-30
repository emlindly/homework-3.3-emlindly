let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: false
  },
  instrument: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  songs: {
    type: Array,
    required: true,
    unique: true,
    lowercase: true
  }
});

module.exports = mongoose.model(`User`, userSchema);