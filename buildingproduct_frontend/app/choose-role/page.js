"use client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { userprofile } from "../admin/apisection/api";
// 001a66
const Chooserole = () => {

   const router=useRouter();

  const {data,isLoading}=useQuery({
    queryKey:["me"],
    queryFn:userprofile,
    retry:false
  })

  if(isLoading){
    return <p>isLoading</p>
  }

  // router.push('/admin/auth/signup')

  const navigatetoreal=()=>{
    if(data && data?._id){
  router.push('/admin/homepage')
    }
    else{
  router.push('/admin/auth/signup')
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
          onClick={()=>router.push('/hospital/auth/signup')}
          className="px-8 py-5 bg-green-600 cursor-pointer text-white border-2 border-black hover:border-white shadow-2xl  hover:bg-green-700 hover:scale-105 transform transition-all duration-300"
        >
          🏥 Hospital
        </button>
      </div>
    </div>
    
  );
};

export default Chooserole;
