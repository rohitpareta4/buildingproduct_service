"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userprofile } from "../admin/apisection/api";
import { me } from "../hospital/apisectionH/apiH";
import { useHospitalstore } from "../hospital/store/useHopitalstore";
// 001a66
const Chooserole = () => {

   const router=useRouter();

   const {getHospitalInfo}=useHospitalstore()

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

  


 
  return (
   <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-br from-[#1a0028] via-[#2b0040] to-[#000000] animate-gradient-x relative">
    <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-[0_0_10px_#ffffff]">
      Select Your Role
    </h1>

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
      </div>
    </div>
    
  );
};

export default Chooserole;
