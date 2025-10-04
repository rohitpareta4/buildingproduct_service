

"use client"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useHospitalstore } from "../store/useHopitalstore"
import { useQuery } from "@tanstack/react-query"
import { me } from "../apisectionH/apiH"

const Page = () => {
  const [hospitalname, setHospitalName] = useState("")
  const [hospitaladdress, setHospitalAddress] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  // const [password,setPassword]=useState("")
  

  const {HospitalInfo}=useHospitalstore()

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  })

  console.log("filter......",data)

  const mutation=useMutation({
    mutationFn:HospitalInfo,
    onSuccess:()=>{
      console.log("done.....")
    }
  })

  const handlesubmit=(e)=>{
    e.preventDefault()
    const infodata={
      hospitalname:hospitalname,
      hospitaladdress:hospitaladdress,
      phonenumber:phonenumber,
      email:data?.email
    }
    mutation.mutate(infodata)
  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-800">
      <div className="bg-[blue] shadow-[6px_6px_0_white]  p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Hospital Information 🏥
        </h2>

        <form onSubmit={handlesubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Hospital Name..."
            value={hospitalname}
            onChange={(e) => setHospitalName(e.target.value)}
            className="w-full shadow-[3px_3px_0_black] p-3 bg-[white] focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            placeholder="Hospital Address..."
            value={hospitaladdress}
            onChange={(e) => setHospitalAddress(e.target.value)}
            className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number..."
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-black shadow-[3px_3px_0_black] cursor-pointer hover:text-[white] py-3  font-semibold hover:bg-blue-700 transition duration-300"
          >
            Save Info
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
