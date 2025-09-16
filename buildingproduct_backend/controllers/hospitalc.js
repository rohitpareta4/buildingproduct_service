import Availablebeds from "../models/hospital/availablebeds.js"
import availabledoctors from "../models/hospital/availabledoctors.js"

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

export const storeAvailabledoctors=async(req,res)=>{
    try {
        const {doctorname,isdoctor}=req.body

        const alreadyExistdoctor=await availabledoctors.findOne({doctorname})
        if(alreadyExistdoctor){
            console.log("already...")
            return res.status(401).json("already exist with this Name")
        }

        const storeAvailabledoctor=await availabledoctors.create({
            doctorname,isdoctor
        })
         console.log("availabledoctors....",storeAvailabledoctor)
        res.status(200).json(storeAvailabledoctor)
    } catch (error) {
        console.log(error)
    }
}

export const getdoctorslist=async(req,res)=>{
  try {
    const doctorslist=await availabledoctors.find()
    console.log("db...............",doctorslist)
    return res.status(200).json(doctorslist)
  } catch (error) {
    console.log(error)
  }
}