const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false, //this will not select when a user.find() use 
  },
  
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "student",
  }  
},{timestamps: true});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
      //agr password change hi nhi hua
      // toh to fir usko hash karnge toh
      // hash ka hash ho jaayga
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
// dot methods lkie {} u can use this space for creating  function 
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);