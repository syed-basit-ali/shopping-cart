const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  avatar: { data: Buffer, contentType: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
  refreshToken: { type: String, required: false },
});

module.exports = mongoose.model("user", userModel);
