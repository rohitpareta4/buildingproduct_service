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
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    hospitalType:{
        type:String,
        required:true
    },
    services:{
        type:[String],
        default:[]
    },
     ambulanceAvailable: {
    type: Boolean,
    default: false,
    },
     emergencyAvailable: {
    type: Boolean,
    default: false,
     },
      adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"adminH",
        required:true
    }
   
})

const hospitalInfo=mongoose.model('hospitalinfo',hospitalinfo)
export default hospitalInfo