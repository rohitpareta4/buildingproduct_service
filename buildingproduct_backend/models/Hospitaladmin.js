import mongoose from "mongoose";

const hospitaladmin=new mongoose.Schema({
   email:{
    type:String,
    required:true,
    unique:true
   },
   fullname:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
     required:true,
    unique:true
   },
     profilepic:{
           type:String,
          default:""
    },
    bio:{
        type:String
    }

},
{ timestamps:true }
)

const adminH=mongoose.model('userH',hospitaladmin)
export default adminH