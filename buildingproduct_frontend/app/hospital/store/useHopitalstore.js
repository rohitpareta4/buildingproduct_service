import axios from 'axios'
import { create } from 'zustand'
import Available from '../Data/Availablecurrently'
// import Available from '../Data/Availablecurrently'
import toast from 'react-hot-toast'
import AddAmbulance from '../Update/AddAmbulance'
import { Ambulance, Hospital } from 'lucide-react'
import Editprofile from '../auth/Editprofile/page'
import { v4 as uuidv4 } from "uuid";



export const useHospitalstore=create((set,get)=>({
    Availablebeds:[],
    AvailabledoctorList:[],
    responses:[],
    

    storeAvailablebedsdata:async(hospitalbedsdata)=>{
        try {
            const {Availablebeds}=get()
            const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/storeAvailablebeds`,hospitalbedsdata,{
                withCredentials:true
            }) 
            console.log('storbed...........',res.data)
            set({Availablebeds:[...Availablebeds,res.data]})
        } catch (error) {
            console.log('error.......',error)
        }
    },

    getAvailablebedsdata:async()=>{
      try {
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/getAvailablebeds`,
            {withCredentials:true}
        )
        console.log('getAvailablebedsdata.....',res.data)
        set({Availablebeds:res.data})
        return res.data
      } catch (error) {
        console.log('error....',error)
        return null
      }
    },

    storeavailabledoctors:async(availabledoctor)=>{
      try {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/storeAvailabledoctors`,availabledoctor,{
          withCredentials:true
        })

        console.log('storeavailabledoctors......',res.data)
        toast.success("Doctor added successfully!");
        return res.data
      } catch (error) {
        console.log(error)
        return null
      }
    },

    getavailabledoctors:async()=>{
      try {
        const {AvailabledoctorList}=get()
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/getdoctorslist`,{
          withCredentials:true
        })
        console.log("res data",res.data)
        set({AvailabledoctorList:res.data})
        console.log("doctor",res.data)
        return res.data
      } catch (error) {
        console.log(error)
        return null
      }
    },

    AddAmbulance:async(adddata)=>{
      try {
        // addAmbulance
         const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/addAmbulance`,adddata,{
          withCredentials:true
        })
        console.log("AddAmbulance....",res.data)
        return res.data
      } catch (error) {
        console.log(error)
        return null
      }
    },

    // getAmbulanceInfo

    AmbulanceList:async()=>{
      try {
          const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/hospital/getAmbulanceInfo`,{
          withCredentials:true
        })
        return res.data

      } catch (error) {
        console.log(error)
        return null
      }
    },

      Editprofile:async(editdata)=>{
      try {
        console.log("data.........",editdata)
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/editprofile`,editdata,{withCredentials:true,
            headers:{ 
        'Content-Type': 'multipart/form-data',
      }
        })
        
        return res.data
      } catch (error) {
        console.log(error)
      }
    },

    HospitalInfo:async(infodata)=>{
      try {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/hospitalInfo`,infodata,{withCredentials:true})
        return res.data
      } catch (error) {
        console.log(error)
      }
    },

    getHospitalInfo:async()=>{
      try {
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/getHospitalinfo`,{withCredentials:true})
        return res.data
      } catch (error) {
        return null
        console.log(error)
      }
    },

    getinfoforUser:async()=>{
      try {
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getuserinfo`,{withCredentials:true})
        return res.data
      } catch (error) {
        return  null
        console.log(error)
      }
    },
    userqueries:async(user_query)=>{
      try {
      const uniqueId = uuidv4();
          set((state) => ({
      responses: [...state.responses, { id:uniqueId,sender: 'user', text: user_query.input }]
    }))
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/userquery`,user_query,{withCredentials:true})
        // set({responses:[...responses,res.data]})
        console.log(res.data)
          set((state) => ({
      responses: [...state.responses, { id:uniqueId,sender: 'bot', text: res.data.answer }]
    }))
        return res.data
      } catch (error) {
        return null
        console.log(error)
      }
    },
    get_bot_response:async()=>{
      try {
        // getbotresponse
        const {responses}=get()
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getbotresponse`,{withCredentials:true})
          const formatted = res.data.flatMap(item => [
      { id:item._id,sender: "user", text: item.userInput },
      { id:item._id,sender: "bot", text: item.botresponse }
    ]);

    // Replace all responses with what we got from DB
    set({ responses: formatted });

        return res.data
      } catch (error) {
        return null
        console.log(error)
      }
    },
    deletechat:async(Id)=>{
      try {
        const {responses}=get()
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/deletethechat/${Id}`,{},{withCredentials:true})
        console.log("res..........",res.data)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
}))



