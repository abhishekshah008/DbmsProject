const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    facultyId:{
     type:mongoose.Schema.ObjectId,
     ref:"faculty",
     require :true
    },
    students:[
      {
       type:mongoose.Schema.ObjectId,
       ref:"faculty",
       require :true
 
     }],
     courseName:String,
     department:String,
     batch:String,
     facultyName:String,
     assigment:[{
       
         type:mongoose.Schema.ObjectId,
         ref:"assigment",
         require :true 
       
 
     }],
 
 
 
   
 });
 

module.exports = mongoose.model("Course", courseSchema);