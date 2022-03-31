const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  userId:String,
  name:String,
  rollNumber:String,
  email:String,
  password:String,
  profilePic:String,
  batch:String,
  department:String  
});


module.exports = mongoose.model("Student", studentSchema);