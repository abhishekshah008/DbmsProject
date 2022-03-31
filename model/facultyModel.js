const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
    facultyName:String,
    facultyId:String,
    email:String,
    password:String,
    profilePic:String,
    department:[{
      name:String,
      course:{
        type:mongoose.Schema.ObjectId,
        ref:"Course",
        require :true
      }
    }],
  
    
  });


module.exports = mongoose.model("Faculty", facultySchema);
  