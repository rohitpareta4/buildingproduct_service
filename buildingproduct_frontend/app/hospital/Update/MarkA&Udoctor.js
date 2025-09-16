"use client"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useMutation } from "@tanstack/react-query";
import { useHospitalstore } from "../store/useHopitalstore";
import toast from "react-hot-toast";

const Markdoctor = ({ setShowdoctorAvailability }) => {
  const [doctorname, setDoctorname] = useState("")
  const [isdoctor, setIsdoctor] = useState(false)

  const {storeavailabledoctors}=useHospitalstore()

  const mutation=useMutation({
    mutationFn:storeavailabledoctors,
    onSuccess:()=>{
      console.log('okkkieee')
      toast.success("Doctor added successfully!");
    }
  })

  const handlesubmit=(e)=>{
    e.preventDefault()
    const availabledoctor={
      doctorname:doctorname,
      isdoctor:isdoctor
    }
    mutation.mutate(availabledoctor)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[400px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Doctor's Availability</h2>
          <span>
            <CloseIcon onClick={() => setShowdoctorAvailability(false)} className="text-white cursor-pointer" />
          </span>
        </div>

        {/* Form content */}
        <form onSubmit={handlesubmit} className="p-6 flex flex-col gap-4 h-[calc(100%-4rem-3.5rem)] overflow-y-auto">
          <input 
            type="text" 
            placeholder="Doctor Name..." 
            value={doctorname} 
            onChange={(e) => setDoctorname(e.target.value)} 
            className="w-full font-semibold border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
          />
          <div className="flex gap-2 items-center">
            <label className="text-yellow-300 font-bold">Doctor is available?</label>
            <input 
              type="checkbox" 
              className="h-6 w-6" 
              checked={isdoctor} 
              onChange={(e) => setIsdoctor(e.target.checked)} 
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
          <button type="submit" className="w-full h-10 font-bold bg-yellow-400 hover:bg-yellow-500 border-4 border-gray shadow-[6px_6px_0px_white] hover:shadow-[8px_8px_0px_white] transition-all">
            UPDATE
          </button>
        </div>
        </form>

        {/* Sticky button */}
        
      </div>
    </div>
  )
}

export default Markdoctor

