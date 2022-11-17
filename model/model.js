const mongoose = require('mongoose');

const schema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('collection', schema);
