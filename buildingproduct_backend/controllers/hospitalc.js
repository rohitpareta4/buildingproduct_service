import Availablebeds from "../models/hospital/availablebeds.js"

export const storeAvailablebeds=async(req,res)=>{
    try {
        const {HospitalName,HospitalAddress,icubeds,generalbeds,privatebeds}=req.body
        const storebedsdata=await Availablebeds.create({
            HospitalName,HospitalAddress,Icubeds:icubeds,generalbeds,privatebeds
        })
        console.log("storebedsdata.....",storebedsdata)
        res.status(200).json(storebedsdata)
    } catch (error) {
        console.log('error...',error)
    }
}

export const getAvailablebeds=async(req,res)=>{
    try {
        const allbeds=await Availablebeds.find()
        res.status(200).json(allbeds)
        
    } catch (error) {
        console.log('error',error)
    }
}