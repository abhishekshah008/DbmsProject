const mongoose = require("mongoose");

const submissionSchema =new mongoose.Schema({
    student:{
  
    },
    assigmentId:{
  
    },
    status:{
  
    },
    data:{
  
    },
    createdAt:{
  
    },
    marks:Number
  })
  
  
  const assigmentSchema = new mongoose.Schema({
      status:{
        type:String,
        enum:["Publish","Draft"],
        default:"Draft"
      },
      deadline:{
        type: Date,
      },
       
      course:{
          type:mongoose.Schema.ObjectId,
          ref:"faculty",
          require :true  
      },
      assigmentType:{
        type:String,
        enum:["Assigment","ClassTest","SubjectiveTest","McqTest"],
        default:"Assigment"
  
      },
      title:String,
      material:String, //file
      description:String,
      submissionDetails:[submissionSchema],
      createdAt:{
        type:Date,
        default:Date.now()
      }
      
  
    
  });
  

module.exports = mongoose.model("Assigment", assigmentSchema);