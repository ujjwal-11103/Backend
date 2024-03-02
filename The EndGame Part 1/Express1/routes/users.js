
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/intermediateDB");

const userData = mongoose.Schema({

  username: String,

  nickname: String,

  description: String,

  categories: {
    type: Array,
    default: []
  },

  datecreated: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("users", userData)

