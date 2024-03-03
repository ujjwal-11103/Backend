
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/intermediateDB");

const userData = mongoose.Schema({

  username: String,

  password: String,

  secret: String

});
userData.plugin(plm);
module.exports = mongoose.model("Authentication", userData)

