import mongoose from "mongoose";

const availabledoctorschema=new mongoose.Schema({
    doctorname:{
        type:String,
        required:true
    },
    isdoctor:{
        type:Boolean,
        required:true
    }
})

const availabledoctors=mongoose.model('doctor',availabledoctorschema)
export default availabledoctors;