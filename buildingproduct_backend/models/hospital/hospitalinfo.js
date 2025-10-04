import mongoose from "mongoose";

const hospitalinfo=new mongoose.Schema({
    hospitalname:{
        type:String,
        required:true
    },
    hospitaladdress:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"adminH",
        required:true
    }
   
})

const hospitalInfo=mongoose.model('hospitalinfo',hospitalinfo)
export default hospitalInfo