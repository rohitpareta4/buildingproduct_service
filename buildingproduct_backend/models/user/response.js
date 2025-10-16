import mongoose from "mongoose";

const responses=mongoose.Schema({
    userInput:{
        type:String,
        required:true
    },
    botresponse:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    goodresponse:{
        type:Boolean,
        default:false,
    },
    badresponse:{
        type:Boolean,
        default:false,
    }
})

const store_responses=mongoose.model('responses',responses)
export default store_responses