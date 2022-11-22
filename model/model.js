const mongoose = require('mongoose');

const schema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model('collection', schema);
