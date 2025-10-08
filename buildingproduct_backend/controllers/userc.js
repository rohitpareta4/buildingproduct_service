import availabledoctors from "../models/hospital/availabledoctors.js"
import Availablebeds from "../models/hospital/availablebeds.js"

export const getuserinfo=async(req,res)=>{
    try {
        const allbeds=await Availablebeds.find().sort({ updatedAt: -1 })
        const alldocs=await availabledoctors.find()
        console.log("allbeds............",allbeds)
        const merge_all=[...allbeds,...alldocs]
        console.log("merge_all....",merge_all)
    } catch (error) {
        console.log(error)
    }
}