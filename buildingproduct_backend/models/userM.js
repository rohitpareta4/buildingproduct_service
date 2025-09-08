import mongoose from "mongoose";

const userschema=new mongoose.Schema({
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

const User=mongoose.model('user',userschema)
export default User