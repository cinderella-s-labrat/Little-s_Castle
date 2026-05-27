const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Fname: String,
  midName: {type: String, required: false},
  Lname: String,
  email: { type: String, unique: true },
  password:{ type: String, required: true },
  address: String,
  gender: String,
  phone: String,
  age: Number,
  DOB: String,
  profilePic: String,
  role: {
  type: String,
  
  enum: [
    "user",
    "admin"
  ],

  default: "user"
},
resetToken: String,
resetTokenExpire: Date,

  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);

