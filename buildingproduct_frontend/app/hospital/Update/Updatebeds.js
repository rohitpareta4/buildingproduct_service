

"use client"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useMutation } from "@tanstack/react-query";
import { useHospitalstore } from "../store/useHopitalstore";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const Updatebeds = ({setShowupdatebeds}) => {
  const [icubeds, setIcuBeds] = useState("")
  const [generalbeds, setGeneralBeds] = useState("")
  const [privatebeds, setPrivateBeds] = useState("")
  // const [Hospitalname,setHospitalName]=useState("")
  // const [Hospitaladdress,setHospitalAddress]=useState("")

  const {storeAvailablebedsdata,getHospitalInfo}=useHospitalstore()

  const queryClient=useQueryClient()

  console.log("storeAvailablebedsdata........",storeAvailablebedsdata)

  const {data}=useQuery({
    queryKey:['info'],
    queryFn:getHospitalInfo
  })

  console.log("data.......of info",data)

  const mutation=useMutation({
    mutationFn:storeAvailablebedsdata,
    onSuccess:()=>{
      queryClient.invalidateQueries(["beds"])
        console.log('done....')
    }
  })

  const handlesubmit = (e) => {
    e.preventDefault()
    const hospitalbedsdata={
         HospitalName:data?.hospitalname,
         HospitalAddress:data?.hospitaladdress,
         icubeds:icubeds,
         generalbeds:generalbeds,
         privatebeds:privatebeds
    }
    mutation.mutate(hospitalbedsdata)
    // console.log("beds....................",beddata)
    // your submit logic here
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4 ">
      <div className="relative w-full max-w-2xl h-[420px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black  shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
        
        {/* Header */}
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Update Bed Availability</h2>
          <span><CloseIcon onClick={()=>setShowupdatebeds(false)} className="text-white cursor-pointer" /></span>
        </div>

        {/* Form */}
        <form className="p-6 flex flex-col justify-center items-center gap-3" onSubmit={handlesubmit}>

<div className="flex justify-between w-full gap-2">
         <div className="w-full text-white font-semibold">
         <p>Hospital:</p>
         <h1>{data?.hospitalname}</h1>
</div>

<div className="w-full text-white font-semibold">
    <p>Address:</p>
    <h1>{data?.hospitaladdress}</h1>
</div>
<div className="w-full text-white font-semibold">
    <p>Phone:</p>
    <h1>{data?.phonenumber}</h1>
</div>
</div>

          
          <input
            type="text"
            className="w-full border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
            value={icubeds}
            onChange={(e) => setIcuBeds(e.target.value)}
            placeholder="ICU beds..."
          />

          <input
            type="text"
            className="w-full border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
            value={generalbeds}
            onChange={(e) => setGeneralBeds(e.target.value)}
            placeholder="General beds..."
          />

          <input
            type="text"
            className="w-full border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
            value={privatebeds}
            onChange={(e) => setPrivateBeds(e.target.value)}
            placeholder="Private beds..."
          />

          <button
            type="submit"
            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 border-4 border-gray  shadow-[6px_6px_0px_white] hover:shadow-[8px_8px_0px_white] transition-all w-full h-10 font-bold mt-4"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Updatebeds


