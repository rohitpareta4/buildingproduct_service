"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userprofile } from "../admin/apisection/api";
import { me } from "../hospital/apisectionH/apiH";
import { useHospitalstore } from "../hospital/store/useHopitalstore";
import { useState } from "react";
// 001a66
const Chooserole = () => {

  const [isload,setIsload]=useState(false)

   const router=useRouter();

   const {getHospitalInfo,getinfoforUser}=useHospitalstore()

   const {data:getinfoforUserdata}=useQuery({
    queryKey:['hospital'],
    queryFn:getinfoforUser
   })

   const {data:getinfo}=useQuery({
    queryKey:['info'],
    queryFn:getHospitalInfo
   })

  const {data:admin,isLoading}=useQuery({
    queryKey:["admin"],
    queryFn:userprofile,
    retry:false
  })

  const {data:hospital}=useQuery({
    queryKey:['hospital'],
    queryFn:me,
    retry:false

  })

  if(isLoading){
    return <p>isLoading</p>
  }

  // router.push('/admin/auth/signup')

  const navigatetoreal=()=>{
    if(admin && admin?._id){
  router.push('/admin/homepage')
    }
    else{
  router.push('/admin/auth/signup')
    }
  }

  const navigatetohospital=()=>{
     if(!hospital || !hospital?._id){
      router.push('/hospital/auth/signup')
    }
   else if(!getinfo || !getinfo._id){
      router.push('/hospital/Hospitalinfo')
    }
    else{
       router.push('/hospital/homepageH')
    }
  }

  const navigatetouserpanel=()=>{
    setIsload(true)
    // router.push('/user/askai')
     setTimeout(() => {
    router.push('/user/askai');
  }, 800); // show loader for a moment
  }

  


 
  return (
   <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-[#1a0028] via-[#2b0040] to-[#000000] animate-gradient-x relative">
    <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-[0_0_10px_#ffffff]">
      Select Your Role
    </h1>
{!isload && (
      <div className="flex gap-8">
        {/* Admin Button */}
        <button
        onClick={navigatetoreal}
          className="px-8 py-5 bg-blue-600 cursor-pointer text-white border-2 border-black hover:border-white shadow-2xl  hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
        >
          🚀 Admin
        </button>

        {/* Hospital Button */}
        <button
          onClick={navigatetohospital}
          className="px-8 py-5 bg-green-600 cursor-pointer text-white border-2 border-black hover:border-white shadow-2xl  hover:bg-green-700 hover:scale-105 transform transition-all duration-300"
        >
          🏥 Hospital
        </button>

          <button
          onClick={navigatetouserpanel}
          className="px-8 py-5 bg-yellow-600 cursor-pointer text-white border-2 border-black hover:border-white shadow-2xl  hover:bg-green-700 hover:scale-105 transform transition-all duration-300"
        >
          🏥 User
        </button>

      </div>
      )}

      {isload && (
  <div className="absolute inset-0 flex items-center justify-center bg-black">
    <video
      src="/loaading.mp4"
      autoPlay
      muted
      loop
      className="w-full h-full object-cover bg-[black]"
    />
  </div>
)}

    
    </div>
    
  );
};

export default Chooserole;
