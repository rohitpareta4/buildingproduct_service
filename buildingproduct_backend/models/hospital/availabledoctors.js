import mongoose from "mongoose";

const availabledoctorschema=new mongoose.Schema({
        HospitalName:{
        type:String,
       required:true

    },
    HospitalAddress:{
        type:String,
       required:true

    },
    doctorname:{
        type:String,
        required:true
    },
    isdoctor:{
        type:Boolean,
        required:true
    },
    speciality:{
        type:String,
        required:true
    }
},
{ timestamps: true }
)

const availabledoctors=mongoose.model('doctor',availabledoctorschema)
export default availabledoctors;