const {mongoose} = require("mongoose");

const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username: String,
  password: String, //hash created from password
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
export{}