import mongoose from "mongoose";

const responses=mongoose.Schema({
    userInput:{
        type:String,
        required:true
    },
    botresponse:{
        type:String,
        required:true
    }
})

const store_responses=mongoose.model('responses',responses)
export default store_responses