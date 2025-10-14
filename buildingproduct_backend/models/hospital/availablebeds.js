import mongoose, { model } from "mongoose";

const availablebedschema=new mongoose.Schema({
    HospitalName:{
        type:String,
       required:true

    },
    HospitalAddress:{
        type:String,
       required:true

    },
    Icubeds:{
        type:String,
        required:true,

    },
     generalbeds:{
        type:String,
        required:true,

    },
     privatebeds:{
        type:String,
       required:true

    }

},
{ timestamps: true }
)

const Availablebeds=mongoose.model('bed',availablebedschema)
export default Availablebeds