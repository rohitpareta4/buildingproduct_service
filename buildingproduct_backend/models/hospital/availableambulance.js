import mongoose from "mongoose";

const Ambulanceschema=new mongoose.Schema({
    drivername:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

const AddAmbulance=mongoose.model('ambulance',Ambulanceschema)
export default AddAmbulance