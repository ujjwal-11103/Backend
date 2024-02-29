
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingDB");

const userschema = mongoose.Schema({
  username: String,
  password: Number,
  age:Number
});

module.exports = mongoose.model("user", userschema)

