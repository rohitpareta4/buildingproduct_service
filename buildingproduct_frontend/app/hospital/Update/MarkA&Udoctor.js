"use client"
import { useState } from "react"

const Markdoctor=()=>{

    const [doctorname,setDoctorname]=useState("")


    return(
           <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[400px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black  shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
        <form className="">
           <input type="text" placeholder="Doctor Name..." value={doctorname} onChange={(e)=>setDoctorname(e.tar)}/>
        </form>
      </div>
      </div>
    )
}
export default Markdoctor
