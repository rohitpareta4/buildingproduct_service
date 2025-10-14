

"use client"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useHospitalstore } from "../store/useHopitalstore"
import { useQuery } from "@tanstack/react-query"
import { me } from "../apisectionH/apiH"
import toast from "react-hot-toast"

const Page = () => {
  const [hospitalname, setHospitalName] = useState("")
  const [hospitaladdress, setHospitalAddress] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  const [city,setCity]=useState("")
  const [state,setState]=useState("")
  const [hospitaltype,setHospitaltype]=useState("")
  const [services,setServices]=useState("")
  const [ambulanceavailable,setAmbulanceavailable]=useState(false)
  const [emergencyavailable,setEmergencyavailable]=useState(false)
  

  const {HospitalInfo}=useHospitalstore()

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  })

  console.log("filter......",data)

  const mutation=useMutation({
    mutationFn:HospitalInfo,
    onSuccess:()=>{
      toast.success("succesfully added hospital Info")
      console.log("done.....")
    }
  })

  const handlesubmit=(e)=>{
    e.preventDefault()
    const infodata={
      hospitalname:hospitalname,
      hospitaladdress:hospitaladdress,
      phonenumber:phonenumber,
      email:data?.email,
      city:city,
      state:state,
      hospitalType:hospitaltype,
      services:services,
      ambulanceAvailable:ambulanceavailable,
      emergencyAvailable:emergencyavailable
    }
    mutation.mutate(infodata)
  }

  const states=["Rajasthan","gujrat","maharashtra","uttar pradesh","Madhya pradesh"]
  const typeofhospital=["Government","Private"]
  const isavailable=["yes","No"]

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-800">
      <div className="bg-[blue] shadow-[6px_6px_0_white]  p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Hospital Information 🏥
        </h2>

        <form onSubmit={handlesubmit} className="space-y-2">
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

           <input
            type="text"
            placeholder="city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          />


               <select
            value={state}
            onChange={(e) => setState(e.target.value)}
             className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s} value={s} className="text-black">
                {s}
              </option>
            ))}
          </select>

          <select
            value={hospitaltype}
            onChange={(e) => setHospitaltype(e.target.value)}
            className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Hospital Type</option>
            {typeofhospital.map((t) => (
              <option key={t} value={t} className="text-black">
                {t}
              </option>
            ))}
          </select>


         

           <textarea
            type="text"
            placeholder="write services here..."
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className="w-full p-3 shadow-[3px_3px_0_black] bg-[white]  focus:ring-2 focus:ring-blue-400 outline-none"
          />

           <div className="flex gap-4">
            {/* 🚑 Ambulance Button */}
            <button
              type="button"
              onClick={() => setAmbulanceavailable(!ambulanceavailable)}
              className={`w-full py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
                ambulanceavailable
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {ambulanceavailable ? "Ambulance  Available" : "No Ambulance"}
            </button>

            {/* ⚕️ Emergency Button */}
            <button
              type="button"
              onClick={() => setEmergencyavailable(!emergencyavailable)}
              className={`w-full py-3 font-semibold rounded-lg shadow-md transition duration-300 ${
                emergencyavailable
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {emergencyavailable ? "Emergency Available" : "No Emergency"}
            </button>
          </div>
    
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

