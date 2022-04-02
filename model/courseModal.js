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
       ref:"Student",
       require :true
 
     }],
     courseName:{
       type:String,
       required:[true,"Please enter the course name"]
     },
     department:{
      type:String,
      required:[true,"Please enter the department name"]

     },
     batch:{
      type:String,
      required:[true,"Please enter the batch name"]
     },
     facultyName:{
      type:String,
      required:[true,"Please enter the faculty"]
     },
     assigment:[{
       
         type:mongoose.Schema.ObjectId,
         ref:"Assigment",
         require :true 
       
 
     }]   
 },{timestamps: true});
 

module.exports = mongoose.model("Course", courseSchema);