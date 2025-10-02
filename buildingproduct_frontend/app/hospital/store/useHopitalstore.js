import axios from 'axios'
import { create } from 'zustand'
import Available from '../Data/Availablecurrently'
// import Available from '../Data/Availablecurrently'
import toast from 'react-hot-toast'
import AddAmbulance from '../Update/AddAmbulance'
import { Ambulance } from 'lucide-react'
import Editprofile from '../auth/Editprofile/page'



export const useHospitalstore=create((set,get)=>({
    Availablebeds:[],
    AvailabledoctorList:[],
    

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
    }
}))



