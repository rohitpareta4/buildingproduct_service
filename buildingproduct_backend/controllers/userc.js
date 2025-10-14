import availabledoctors from "../models/hospital/availabledoctors.js"
import Availablebeds from "../models/hospital/availablebeds.js"
import hospitalInfo from "../models/hospital/hospitalinfo.js"
import axios from "axios"
import { model } from "mongoose"
import store_responses from "../models/user/response.js"
import { ObjectId } from "mongodb"

export const getuserinfo=async(req,res)=>{
    try {
        const allbeds=await Availablebeds.find().sort({ updatedAt: -1 })
        const alldocs=await availabledoctors.find()
        const hospital_info=await hospitalInfo.find()


        const merge_data=hospital_info.map((hospital)=>{
            const latest_beds=allbeds.find((a)=>a.HospitalName?.toLowerCase()===hospital.hospitalname?.toLowerCase())
            const doctors=alldocs.filter((b)=>b.HospitalName?.toLowerCase()===hospital.hospitalname?.toLowerCase()).map((d)=>({
                doctorname:d.doctorname,
                isdoctor:d.isdoctor,
                speciality:d.speciality
            }))

    


             return {
        ...hospital.toObject(),
        beds: latest_beds || null,
        doctors: doctors || [],
      };


        })
        console.log("alldocs.......",alldocs)
        console.log(JSON.stringify(merge_data, null, 2))

        console.log("merge_all....",merge_data)
        res.status(200).json(JSON.stringify(merge_data, null, 2))
    } catch (error) {
        console.log(error)
    }
}

export const bot_response=async(req,res)=>{
  try {
    console.log("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooookkkkkkkkkkkkkk")
       console.log("user_____query........",req.body)
       const {context,input}=req.body

      const groqres=await axios.post("https://api.groq.com/openai/v1/chat/completions",
        {
        model:"llama-3.1-8b-instant",
        messages:[
            {
                role:'system',
                content:`You are a highly knowledgeable and helpful healthcare assistant. 
                You have full access to the hospital data provided below: ${context}
                Your responsibilities:
                accurately answer any queries related about realtime latest beds,doctors,ambulance availability.
                always refer only to the provided hospital data,do not invent or assume anything.
                - Give responses in a clear, humble, and polite tone.
              - If the query is about a specific city, specialty, or service, filter the data to provide the most relevant hospitals.
              -don't say like Hospital data ke anusar instead say according to realtime data
                `
            },
            {
                role:'user',
                content:input
            }
        ],
         temperature: 0.2
        },
        {
            headers:{
                       "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
            }
       
        }


      )
      // console.log("________________________________________",groqres.data)
        console.log("botresponse...............",groqres.data.choices[0].message.content)
        const storeresponses=await store_responses.create({
          userInput:input,botresponse:groqres.data.choices[0].message.content
        })
          console.log(storeresponses)
          res.status(200).json({ answer: groqres.data.choices[0].message.content })
  } catch (error) {
    console.log(error)
  }
}

export const getbot_response=async(req,res)=>{
  try {
    console.log("helooooooooooooooo???????????????????")
    const getresponse=await store_responses.find()
    console.log("getresponse_________________",getresponse)
    res.status(200).json(getresponse)
  } catch (error) {
    console.log(error)
  }
}

export const deletechat=async(req,res)=>{
  try {
    console.log("params.................",req.params)
    
    const deletethechat=await store_responses.deleteOne({_id:new ObjectId(req.params.id)})
    console.log("deletethechat.............",deletethechat)
    res.status(200).json(deletethechat)
  } catch (error) {
    console.log(error)
  }
}