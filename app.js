const express=require("express")
const app=express();
const bodyParser=require("body-parser")
const cors=require("cors")
const fileUpload=require("express-fileupload")

const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'shahbasket', 
  api_key: '456545845563234', 
  api_secret: '_hlOWNSv8H2PFOtSm1p6e4ZMieE' 
});
var corsOptions = {

  origin: ["*", "http://localhost:3000","http://localhost:8081", "https://dashboard-bf1vi467x-shahbastekdashboard.vercel.app"],
  credentials: true,
  maxAge: "1728000",
};
app.use(cors())

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());





app.use(fileUpload({
    useTempFiles:true
}))
app.get("/",(req,res)=>{
  res.sendStatus(200)
})






module.exports=app