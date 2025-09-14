import axios from 'axios'
import { create } from 'zustand'



export const useHospitalstore=create((set,get)=>({
    Availablebeds:[],

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
    }
}))