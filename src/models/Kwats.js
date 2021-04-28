const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const KwatsSchema = new mongoose.Schema({
  id: {
    type: String
  },
  user_id: {
    type: String
  },
  text: {
    type: String
  },
  likes: {
    type: []
  },
  created_at: {
    type: Number
  }
});

module.exports = mongoose.model('kwats', KwatsSchema);
