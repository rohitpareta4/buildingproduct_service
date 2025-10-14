"use client"
import MicIcon from "@mui/icons-material/Mic"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useHospitalstore } from "@/app/hospital/store/useHopitalstore"
import { useQuery } from "@tanstack/react-query"

const Chatinput = ({input,setInput}) => {

   const {getinfoforUser,userqueries}=useHospitalstore()

   const {data}=useQuery({
    queryKey:['hospital'],
    queryFn:getinfoforUser
   })

   const mutation=useMutation({
    mutationFn:userqueries,
    onSuccess:(done)=>{
      setInput("")
      console.log(done)
    }
   })


  const handlesubmit=(e)=>{
    e.preventDefault()
    const user_query={
      context:data,
      input:input
    }
    mutation.mutate(user_query)
  }

  return (
    <div className="bg-[#212121] h-[6rem] flex justify-center items-center">
      <div className="relative w-2/3">
        {/* Input Field */}
        <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className="text-white h-16 w-full bg-[#303030] rounded-full p-4 pr-12 placeholder-gray-400 focus:outline-none"
          placeholder="Ask about availability"
        />

        {/* Mic Icon inside input */}
        <MicIcon
          className="text-white absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[blue] rounded-full p-2 hover:text-gray-300 transition"
          style={{ height: "40px", width: "40px" }}
        />
        </form>
      </div>
    </div>
  )
}

export default Chatinput

